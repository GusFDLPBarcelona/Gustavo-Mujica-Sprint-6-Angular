import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {

  user!: string;
  monto!: number;
  lang!: number;
  paginas!: number;
  web!: boolean;
  ads!: boolean;
  seo!: boolean;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.user = params.get('user')!;
      this.monto = +params.get('monto')!;
      this.lang = +params.get('lang')!;
      this.paginas = +params.get('paginas')!;
      this.web = params.get('web') === 'true';
      this.ads = params.get('ads') === 'true';
      this.seo = params.get('seo') === 'true';
    });
  }
}
