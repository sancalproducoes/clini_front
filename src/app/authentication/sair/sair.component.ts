import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    templateUrl: './sair.component.html'
})

export class SairComponent {
    constructor(
        private _activatedRoute: ActivatedRoute,
        private router: Router
        ) {
    }

    ngOnInit(): void {
        this.sair();
    }

    sair(){
        this.router.navigate([localStorage.getItem("workspace_name")+"/authentication/login"])
        localStorage.clear();
    }
} 