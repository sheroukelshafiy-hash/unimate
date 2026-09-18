import { Injectable, signal } from '@angular/core';
import { ChatMessage } from '../models/chat.model';

interface KnowledgeItem {
  id: string;
  keywords: string[];
  question: string;
  answer: string;
  source: string;
}

@Injectable({
  providedIn: 'root'
})
export class AiService {
  messages = signal<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      text: 'أهلاً بك في UniMate AI! كيف يمكنني مساعدتك اليوم في اللوائح أو المناهج؟',
      timestamp: new Date()
    }
  ]);

  isLoading = signal<boolean>(false);

  private knowledgeBase: KnowledgeItem[] = [
    {
      id: '1',
      keywords: ['تدريب', 'مادة', 'المواد', 'تسجيل', 'ساعات', 'الساعات'],
      question: 'ما هي شروط تسجيل مواد الفصل الدراسي؟',
      answer: 'يسمح للطالب بتسجيل الحد الأقصى 18 ساعة معتمدة في الفصل الدراسي العادي بشرط ألا يقل المعدل التراكمي عن 2.0.',
      source: 'لائحة شؤون الطلاب - المادة 12'
    },
    {
      id: '2',
      keywords: ['مشروع', 'التخرج', 'تخرج', 'مشروع التخرج', 'شروط'],
      question: 'ما هي شروط التقدم لمشروع التخرج؟',
      answer: 'يتطلب التقدم لمشروع التخرج اجتياز الطالب 100 ساعة معتمدة بنجاح وألا يقل معدله التراكمي عن 2.25.',
      source: 'دليل مشاريع التخرج - المادة 5'
    },
    {
      id: '3',
      keywords: ['عذر', 'غياب', 'امتحان', 'امتحانات', 'المستشفى'],
      question: 'كيف يتم تقديم الأعذار الطبية للغياب عن الامتحانات؟',
      answer: 'يجب تقديم العذر الطبي المعتمد إلى إدارة الشؤون الطبية بالكلية خلال 48 ساعة من موعد الامتحان.',
      source: 'دليل الامتحانات والتقويم - المادة 20'
    },
    {
      id: '4',
      keywords: ['انذار', 'معدل', 'GPA', 'فصل', 'تراكمي'],
      question: 'متى يحصل الطالب على إنذار أكاديمي؟',
      answer: 'يحصل الطالب على إنذار أكاديمي إذا قل معدله التراكمي GPA عن 2.0 في نهاية أي فصل دراسي رئيسي.',
      source: 'لائحة شؤون الطلاب - المادة 18'
    },
    {
      id: '5',
      keywords: ['حذف', 'إضافة', 'انسحاب', 'تعديل'],
      question: 'ما هو الموعد المسموح فيه بحذف أو إضافة المواد؟',
      answer: 'يمكن للطالب حذف أو إضافة المواد خلال الأسبوعين الأولين فقط من بداية الفصل الدراسي الرئيسي.',
      source: 'لائحة التسجيل الأكاديمي - المادة 8'
    },
    {
      id: '6',
      keywords: ['إعادة', 'تحسين', 'رسوب', 'مقرر'],
      question: 'هل يمكن إعادة دراسة مقرر تم النجاح فيه؟',
      answer: 'يجوز للطالب إعادة دراسة المقرر لرفع التقدير إذا كان تقديره أقل من C، ويحسب له التقدير الأعلى.',
      source: 'دليل التقييم الأكاديمي - المادة 15'
    }
  ];

  sendMessage(userText: string) {
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
      timestamp: new Date()
    };
    this.messages.update(msgs => [...msgs, userMsg]);
    this.isLoading.set(true);

    setTimeout(() => {
      const query = userText.toLowerCase();
      const matched = this.knowledgeBase.find(item =>
        item.keywords.some(kw => query.includes(kw.toLowerCase()))
      );

      let aiResponseText = 'عذراً، لم أجد معلومة مطابقة لسؤالك في لائحة الكلية المتاحة حالياً. يرجى مراجعة المرشد الأكاديمي.';
      let sourcesList: string[] = [];

      if (matched) {
        aiResponseText = matched.answer;
        sourcesList = [matched.source];
      }

      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiResponseText,
        sources: sourcesList,
        timestamp: new Date()
      };
      this.messages.update(msgs => [...msgs, aiResponse]);
      this.isLoading.set(false);
    }, 1000);
  }
}