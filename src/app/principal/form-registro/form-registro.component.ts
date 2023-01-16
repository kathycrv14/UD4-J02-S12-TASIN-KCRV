import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent {

  // Crear atributo de tipo FormBuilder
  constructor(private formBuilder : FormBuilder) { }
  ngOnInit() {

  }

  //Estructura del formularioreaxtivo

  //Variable
  registroForm = this.formBuilder.group({

    nombres: ['', Validators.required],
    email: ['', Validators.required],
    telefono: ['', Validators.required],
    asunto: ['', Validators.required],
    txtMensaje: ['', Validators.required],
  });

  //Generar un metodo get para cada cada campo del formulario reactivo
  get nombres(){ return this.registroForm.get('nombres'); }
  get email(){ return this.registroForm.get('email'); }
  get telefono(){ return this.registroForm.get('telefono'); }
  get asunto(){ return this.registroForm.get('asunto'); }
  get txtMensaje(){ return this.registroForm.get('txtMensaje'); }

    mensaje : string ="";

  onSubmit(){

    if(!this.registroForm.valid){
      alert('Alguna validación no se ha cumplido');
      return;
    }else{
      this.mensaje = "Gracias por comunicarte con nosotros!";
      this.registroForm.disable(); // deshabilitar los inputs
    }
  }

  Refrescar(){
    //location.reload();
    this.registroForm.reset() // reiniciar los valores
    this.registroForm.enable(); // habilitar los inputs
    this.mensaje = "";
  }
}
