import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as bootstrap from 'bootstrap';

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }

  interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList;
  }

  interface SpeechRecognitionResultList {
    [index: number]: SpeechRecognitionResult;
    readonly length: number;
  }

  interface SpeechRecognitionResult {
    [index: number]: SpeechRecognitionAlternative;
    readonly length: number;
    readonly isFinal: boolean;
  }

  interface SpeechRecognitionAlternative {
    readonly transcript: string;
    readonly confidence: number;
  }
}
@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent {
  
  
  description: string = '';
  barcode: string = '';
  stockQuantity: number = 0;
  stockWarning: number = 0;
  purchasePrice: number = 0;
  salePrice: number = 0;
  expiryDate: Date | null = null;
  
  isRecording = false;
  recognition: any;

  transcriptionResult: string = '';
  productName: string = '';
  showTranscriptionResults = false;
  successMessage: string = '';

  supplierId: any;
  categoryId: any;

  speechRecognitionEnabled: boolean = true;

  ngOnInit(): void {
    const storedConfig = sessionStorage.getItem('speechRecognitionEnabled');
    if (storedConfig !== null) {
      this.speechRecognitionEnabled = storedConfig === 'true';
    } else {
      this.speechRecognitionEnabled = true; // Default value
    }
  }

  constructor(private http: HttpClient) {}

  searchProduct(): void {
    console.log('Search product clicked');
  }

  startListening() {
    const { SpeechRecognition, webkitSpeechRecognition } = window as any;
    this.recognition = new (SpeechRecognition || webkitSpeechRecognition)();
    this.recognition.lang = 'pt-BR';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;

    this.recognition.start();
    this.showModal();

    this.recognition.onresult = (event: SpeechRecognitionEvent) => {
      const speechResult = event.results[0][0].transcript;
      this.transcriptionResult = speechResult;
      console.log('Speech result: ', speechResult);
    };

    this.recognition.onerror = (event: any) => {
      console.error('Speech recognition error: ', event.error);
    };
  }

  stopListening() {
    this.isRecording = false;
    this.recognition.stop();
    this.showTranscriptionResults = false;
    if (this.transcriptionResult !== '') {
      this.showTranscriptionResults = true;
    }
  const checkTranscription = setInterval(() => {
    if (this.transcriptionResult !== '') {
    clearInterval(checkTranscription);
    this.showTranscriptionResults = true;
    }
  }, 1000);
  }

  confirmTranscription() {
    this.productName = this.transcriptionResult;
    this.hideModal();
  }

  showModal() {
    const modalElement = document.getElementById('recordingModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    } else {
      console.error('Modal element not found');
    }
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      } else {
        console.error('Modal instance not found');
      }
    } else {
      console.error('Modal element not found');
    }
  }

  hideModal() {
    const modalElement = document.getElementById('recordingModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      } else {
        console.error('Modal instance not found');
      }
    } else {
      console.error('Modal element not found');
    }
  }
  retryTranscription(): void {
    this.transcriptionResult = '';
    this.isRecording = true;
  }
  registerProduct() {
    const productData = {
      name: this.productName,
      description: this.description,
      supplierId: this.supplierId,
      categoryId: this.categoryId,
      barcode: this.barcode,
      stockQuantity: this.stockQuantity,
      stockWarning: this.stockWarning,
      purchasePrice: this.purchasePrice,
      salePrice: this.salePrice,
      expiryDate: this.expiryDate
    };

    this.http.post('/api/products', productData).subscribe(
      response => {
        console.log('Product registered successfully', response);
        this.successMessage = 'Produto cadastrado com sucesso!';

        // Handle success response
      },
      error => {
        console.error('Error registering product', error);
        this.successMessage = 'Erro ao cadastrar o produto.';
      }
    );
  }
}