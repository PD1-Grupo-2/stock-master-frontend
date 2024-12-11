import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css']
})
export class ConfigurationsComponent implements OnInit {
  speechRecognitionEnabled: boolean = true;
  successMessage: string = '';

  ngOnInit(): void {
    const storedConfig = sessionStorage.getItem('speechRecognitionEnabled');
    if (storedConfig !== null) {
      this.speechRecognitionEnabled = storedConfig === 'true';
    } else {
      this.speechRecognitionEnabled = true; // Default value
    }
  }

  saveConfigurations(): void {
    sessionStorage.setItem('speechRecognitionEnabled', this.speechRecognitionEnabled.toString());
    this.successMessage = 'Configurações salvas com sucesso!';
    setTimeout(() => {
      this.successMessage = '';
    }, 3000);
  }
}