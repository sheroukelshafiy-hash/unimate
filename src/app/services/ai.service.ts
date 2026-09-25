import { Injectable } from '@angular/core';
import universityData from '../../assets/university-data.json';

@Injectable({
  providedIn: 'root'
})
export class AiService {
  private data = universityData;

  getResponse(userQuery: string): { text: string; sources: string[] } {
    const query = userQuery.toLowerCase().trim();
    const queryTokens = query.split(' ');

    const matchedDocs = this.data.filter(doc =>
      doc.keywords.some(kw => query.includes(kw.toLowerCase())) ||
      doc.content_en.toLowerCase().includes(query) ||
      doc.content_ar.includes(query)
    );

    if (matchedDocs.length === 0) {
      return {
        text: 'Sorry, I could not find relevant academic guidelines for your query. / عذراً، لم أجد معلومات مطابقة لطلبك في اللائحة الأكاديمية.',
        sources: []
      };
    }

    const isArabic = /[\u0600-\u06FF]/.test(query);

    const answerText = matchedDocs
      .map(d => isArabic ? d.content_ar : d.content_en)
      .join(' ');
      
    const sources = matchedDocs.map(d => d.title);

    return {
      text: answerText,
      sources: sources
    };
  }
}