import topics from '../../wordpress/pavel-ask-ai/profile.json';

type ProfileTopic = typeof topics[number];

export interface Turn {
  role: 'user' | 'assistant';
  content: string;
}
export interface Answer {
  response: string;
  sources: { title: string; url: string }[];
  mode: 'model' | 'portfolio';
}

export function publicSources(entries: ProfileTopic[]): Answer['sources'] {
  const links = new Map<string, { title: string; url: string }>();
  for (const entry of entries) {
    if (entry.url && !links.has(entry.url)) links.set(entry.url, { title: entry.title, url: entry.url });
  }
  return Array.from(links.values()).slice(0, 3);
}

function normalize(text: string) {
  return text.toLowerCase().replace(/[’']/g, '').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
}

// A visible source excerpt is still useful when the AI service is unavailable.
export function portfolioAnswer(question: string): Answer {
  const q = normalize(question);
  const words = q.split(' ');
  const russian = /[а-яё]/i.test(q);
  const intro = topics[0];
  if (/^(hello|hi|hey|привет|здравствуйте|добрый день)( pavel| павел)?$/.test(q)) {
    return {
      mode: 'portfolio',
      response: russian
        ? 'Привет! Что рассказать о Павле: его опыт CTO в NeironHub, инструмент CodePipeline или работу над веб-платформами?'
        : 'Hello! Would you like to hear about Pavel’s CTO work at NeironHub, his CodePipeline developer tool or his web platform experience?',
      sources: publicSources([intro]),
    };
  }
  const matches = topics.map((topic) => ({
    topic,
    score: topic.keywords.reduce((score, keyword) => {
      const term = normalize(keyword);
      const match = term.includes(' ')
        ? (' ' + q + ' ').includes(' ' + term + ' ')
        : words.some((w) => w === term || (/[а-яё]/.test(term) && term.length >= 4 && w.startsWith(term)));
      return score + (match ? term.length : 0);
    }, 0),
  })).filter((match) => match.score > 0).sort((a, b) => b.score - a.score);
  // A named project or skill gives a more specific answer than a matching biography term.
  const topic = (matches.find((match) => match.topic.id !== 'overview') ?? matches[0])?.topic;
  if (!topic) {
    return {
      mode: 'portfolio',
      response: russian
        ? 'В публичном профиле я не нашёл ответа на этот вопрос. Могу показать сведения о NeironHub, CodePipeline, образовании или публикациях Павла.'
        : 'I couldn’t find a matching entry in Pavel’s public profile. Try NeironHub, CodePipeline, his education or his articles.',
      sources: publicSources([intro]),
    };
  }
  return { mode: 'portfolio', response: topic[russian ? 'ru' : 'en'], sources: publicSources([topic]) };
}
