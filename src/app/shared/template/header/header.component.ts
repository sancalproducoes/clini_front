import { Component } from '@angular/core';
import { ThemeConstantService } from '../../services/theme-constant.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{
    searchVisible : boolean = false;
    isFolded : boolean;
    isExpand : boolean;
    user
    profile_pic
    constructor( 
        private themeService: ThemeConstantService,
        private router: Router
        ) {}

    ngOnInit(): void {
        this.getUserData();
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);
    }

    getUserData(){
        this.user = JSON.parse(localStorage.getItem("userdata"))
        this.profile_pic = "data:"+this.user.profile_pic_mime+";base64,"+this.user.profile_pic
    }

    toggleFold() {
        this.isFolded = !this.isFolded;
        this.themeService.toggleFold(this.isFolded);
    }

    toggleExpand() {
        this.isFolded = false;
        this.isExpand = !this.isExpand;
        this.themeService.toggleExpand(this.isExpand);
        this.themeService.toggleFold(this.isFolded);
    }


    configuracoes(){
        let workspace = localStorage.getItem("workspace_name");
        this.router.navigate(['/'+workspace+'/configuracoes'])
    }

    logout(){
        let workspace = localStorage.getItem("workspace_name");
        this.router.navigate(['/'+workspace+'/login'])
        localStorage.clear();
    }
}
