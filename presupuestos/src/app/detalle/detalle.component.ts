import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {

  user!: string;
  monto!: number;
  lang!: number;
  paginas!: number;


  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.user = params.get('user')!;
      this.monto = +params.get('monto')!;
      this.lang = +params.get('lenguajes')!;
      this.paginas = +params.get('paginas')!;

    });
  }
}
