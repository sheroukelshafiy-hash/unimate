import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiService } from '../../services/ai.service';

@Component({
  selector: 'app-ai-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ai-chat.html',
  styleUrl: './ai-chat.css'
})
export class AiChatComponent {
  aiService = inject(AiService);

  sendMessage(inputElement: HTMLInputElement) {
    const text = inputElement.value.trim();
    if (text) {
      this.aiService.sendMessage(text);
      inputElement.value = '';
    }
  }
}