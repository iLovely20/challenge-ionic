import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
declare var window: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  nama: string = '';
  nim: string = '';
  kelas: string = '';
  tanggalLahir: string = '';
  alamat: string = '';
  golonganDarah: string = '';

  formData={
    nama:'',
    nim:'',
    kelas: '',
    tanggalLahir: '',
    alamat: '',
    golonganDarah:'',
  }

  constructor(
    private toastController: ToastController,
  ) {}

  sendWhatsAppMessage() {
    const message = `
      Nama: ${this.nama}
      NIM: ${this.nim}
      Kelas: ${this.kelas}
      Tanggal Lahir: ${this.tanggalLahir}
      Alamat: ${this.alamat}
      Golongan Darah: ${this.golonganDarah}
    `;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '089502657747';

    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, '_system');
  }

  sendTelegramMessage() {
    const message = `
      Nama: ${this.nama}
      NIM: ${this.nim}
      Kelas: ${this.kelas}
      Tanggal Lahir: ${this.tanggalLahir}
      Alamat: ${this.alamat}
      Golongan Darah: ${this.golonganDarah}
    `;
  
    const encodedMessage = encodeURIComponent(message);
    const username = '@OhDearLovely';
  
    const url = `tg://msg?text=${encodedMessage}&to=${username}`;
  
    window.location.href = url;
  }


  

  ngOnInit() {
  }


}
