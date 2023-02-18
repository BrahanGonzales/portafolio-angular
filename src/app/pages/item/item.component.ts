import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion = {};
  id?: String;
  constructor(
    private route: ActivatedRoute,
    public productoService: ProductoService
  ) {

  }
  ngOnInit() {
    this.route.params
      .subscribe(parametros => {
        // console.log("parametros: ", parametros['id']);
        this.productoService.getProducto(parametros['id'])
          .subscribe((producto: ProductoDescripcion) => {
            this.id=parametros['id'];
            this.producto = producto;
            console.log(producto)
          })
      })
  }
}
