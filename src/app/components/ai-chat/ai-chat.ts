import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AiService } from '../../services/ai.service';
import { ChatMessage } from '../../models/chat.model';

@Component({
  selector: 'app-ai-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ai-chat.html',
  styleUrl: './ai-chat.css'
})
export class AiChatComponent {
  private aiService = inject(AiService);

  messages = signal<ChatMessage[]>([
    { sender: 'bot', text: 'أهلاً بك في UniMate! كيف أستطيع مساعدتك اليوم؟' }
  ]);
  userInput = signal<string>('');

  sendMessage() {
    const text = this.userInput().trim();
    if (!text) return;

    this.messages.update(list => [...list, { sender: 'user', text }]);
    this.userInput.set('');

    const res = this.aiService.getResponse(text);

    this.messages.update(list => [
      ...list,
      { sender: 'bot', text: res.text, sources: res.sources }
    ]);
  }
}