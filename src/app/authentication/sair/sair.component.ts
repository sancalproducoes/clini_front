import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    templateUrl: './sair.component.html'
})

export class SairComponent {
    workspace = localStorage.getItem("workspace_name")
    constructor(
        private _activatedRoute: ActivatedRoute,
        private router: Router
        ) {
    }

    ngOnInit(): void {
        this.sair();
    }

    sair(){
        this.router.navigate([this.workspace+"/login"])
        localStorage.clear();
    }
} 