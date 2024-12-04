import { Component } from '@angular/core';
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
  selector: 'app-new-sell-order',
  templateUrl: './new-sell-order.component.html',
  styleUrls: ['./new-sell-order.component.css']
})
export class NewSellOrderComponent {
  productName: string = '';
  quantity: number = 1;
  price: number = 0;
  customerName: string = '';
  customerEmail: string = '';
  orderDate: string = '';
  orderStatus: string = 'pending';
  transcriptionResult: string = '';
  recognition: any;
  isRecording: boolean = true;
  showTranscriptionResults = false;
  searchProduct() {
    console.log('Search product clicked');
  }

  scanBarcode() {
    console.log('Scan barcode clicked');
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
  
}