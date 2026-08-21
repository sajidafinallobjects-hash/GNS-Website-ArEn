import type { Service, ProjectCaseStudy } from '@/types';

export type Language = 'en' | 'ar';

const servicesAr: Record<string, { title: string; shortDescription: string; description: string; capabilities: string[] }> = {
  'Artificial Intelligence': {
    title: 'الذكاء الاصطناعي',
    shortDescription: 'أنظمة ذكية مصممة لمعالجة أعمق تحديات أعمالك.',
    description: 'نصمم وننشر أنظمة ذكاء اصطناعي تعالج تحديات أعمال جوهرية — من محركات الاستدلال ومنصات دعم القرار إلى وكلاء أذكياء يتكيّفون ويتطورون مع الوقت. حلولنا مبنية لتكون قابلة للتفسير، موثوقة، وجاهزة للإنتاج.',
    capabilities: ['وكلاء أذكياء', 'أنظمة دعم القرار', 'استراتيجية وبنية الذكاء الاصطناعي', 'تقييم ونشر النماذج', 'تكامل أنظمة الذكاء الاصطناعي'],
  },
  'Machine Learning': {
    title: 'تعلم الآلة',
    shortDescription: 'تحويل بياناتك إلى نماذج تنبؤية تصنع الفرق.',
    description: 'نبني نماذج تعلم آلي تحوّل بياناتك إلى ميزة تنافسية — من التحليلات التنبؤية والتوقعات إلى التصنيف وأنظمة التوصية. نماذجنا مصممة للدقة والقابلية للتفسير والأداء في العالم الحقيقي.',
    capabilities: ['التحليلات التنبؤية', 'نماذج التوقع', 'التصنيف والتوصية', 'تدريب وضبط النماذج', 'عمليات ML والنشر'],
  },
  'Computer Vision': {
    title: 'الرؤية الحاسوبية',
    shortDescription: 'أنظمة تفهم وتحلل العالم البصري بدقة عالية.',
    description: 'نبني أنظمة رؤية حاسوبية تستخرج المعنى من البيانات البصرية — من تصنيف الصور واكتشاف الكائنات إلى التصوير الطبي وتحليل الفيديو اللحظي. نجمع التعلم العميق مع واجهات بديهية لحلول عملية في العالم الحقيقي.',
    capabilities: ['تصنيف الصور', 'اكتشاف الكائنات', 'التصوير الطبي', 'تحليل الفيديو', 'فحص الجودة البصرية'],
  },
  'Generative AI': {
    title: 'الذكاء الاصطناعي التوليدي',
    shortDescription: 'تطبيقات الجيل القادم المدعومة بنماذج توليدية متطورة.',
    description: 'نبني تطبيقات مدعومة بالذكاء الاصطناعي التوليدي — من توليد المحتوى الذكي والواجهات الحوارية إلى ضبط النماذج المخصصة وأنظمة الاسترجاع المعزز. حلولنا مصممة لتكون عملية، قابلة للتحكم، ومبنية على بياناتك.',
    capabilities: ['ذكاء حواري', 'توليد المحتوى', 'أنظمة RAG', 'ضبط النماذج', 'بحث مدعوم بالذكاء الاصطناعي'],
  },
  'Intelligent Automation': {
    title: 'الأتمتة الذكية',
    shortDescription: 'ذكاء اصطناعي وأتمتة معاً لعمليات أكثر كفاءة وذكاءً.',
    description: 'نجمع الذكاء الاصطناعي بالأتمتة لبناء أنظمة لا تكرر المهام فحسب — بل تفهم وتقرر وتتحسن. من معالجة المستندات الذكية إلى سير العمل المدفوع بالذكاء الاصطناعي، نجعل عملياتك أكثر ذكاءً وسرعة ومرونة.',
    capabilities: ['معالجة المستندات الذكية', 'سير عمل مدفوع بالذكاء الاصطناعي', 'تحسين العمليات', 'استخراج البيانات الذكي', 'اتخاذ القرار الآلي'],
  },
  'AI Application Development': {
    title: 'تطوير تطبيقات الذكاء الاصطناعي',
    shortDescription: 'من الفكرة إلى تطبيق متكامل جاهز للإنتاج.',
    description: 'نحوّل مفاهيم الذكاء الاصطناعي إلى تطبيقات كاملة جاهزة للإنتاج. من تكامل النماذج وتصميم واجهات البرمجة إلى التطوير المتكامل والنشر، نبني برمجيات مدعومة بالذكاء الاصطناعي تتكامل بسلاسة مع عملياتك وتقدّم قيمة قابلة للقياس.',
    capabilities: ['تطبيقات ذكاء اصطناعي متكاملة', 'تكامل النماذج وواجهات API', 'منصات مدعومة بالذكاء الاصطناعي', 'أنظمة استدلال لحظي', 'نشر شامل من البداية للنهاية'],
  },
};

const projectsAr: Record<string, Partial<ProjectCaseStudy>> = {
  'dermavision-ai': {
    title: 'DermaVision AI',
    category: 'الذكاء الاصطناعي / الرؤية الحاسوبية / الرعاية الصحية',
    tagline: 'تحليل آفات الجلد بالذكاء الاصطناعي ودعم القرار السريري',
    description: 'نظام مدعوم بالذكاء الاصطناعي يحلّل صور آفات الجلد ويتوقّع التشخيص الأرجح، مصمم كأداة لدعم القرار والمساعدة السريرية للمتخصصين في الأمراض الجلدية.',
    overview: 'DermaVision AI منصة متكاملة لتصنيف آفات الجلد ودعم القرار السريري. تجمع بين نموذج تعلم عميق مبني على EfficientNet مُدرَّب مسبقاً، وواجهة React أمامية، وخلفية FastAPI، وتكامل مع قاعدة بيانات — لمساعدة المتخصصين الطبيين على تقييم آفات الجلد المشبوهة بسرعة. يصنّف النظام الآفات في سبع فئات، ويعرض درجات الثقة وأعلى التنبؤات، ويستخدم Grad-CAM لشرح مناطق الصورة التي أثّرت في تنبؤ النموذج — مما يجعل استدلال الذكاء الاصطناعي شفافاً لا غامضاً.',
    challenge: 'إنّ الكشف المبكر عن آفات الجلد المشبوهة وتصنيفها مهمة صعبة تتطلب عادةً تقييماً من اختصاصي أمراض جلدية. تمثّل التحدي في بناء نظام يحلّل صور الآفات بنموذج ذكاء اصطناعي موثوق، ويعرض التنبؤات مع درجات الثقة، والأهم من ذلك — أن يشرح استدلاله بصرياً حتى يستطيع الأطباء فهم مخرجات النموذج وتقييمها بدلاً من الثقة بها ثقةً عمياء.',
    solution: 'منصة متكاملة مبنية حول نموذج تعلم عميق من EfficientNet مُدرَّب مسبقاً، دُرّب على مجموعتي بيانات HAM10000 و ISIC 2019، مع إزالة الصور المكرّرة ومعالجة دقيقة للبيانات تشمل تغيير الحجم والتوسيع والتطبيع. يُقدَّم النظام عبر خلفية FastAPI وواجهة React أمامية مع تكامل قاعدة بيانات، مكوّناً خط استدلال ذكاء اصطناعي واحد متماسك. يبرز تصور Grad-CAM مناطق الصورة التي أثّرت في التنبؤ، مما يجعل النموذج قابلاً للتفسير ومخرجاته موثوقة.',
    features: [
      { title: 'التنبؤ بالذكاء الاصطناعي', description: 'نموذج تعلم عميق مبني على EfficientNet يحلّل صور آفات الجلد المرفوعة ويتوقّع التشخيص الأرجح عبر سبع فئات من الآفات.' },
      { title: 'تصنيف سبع فئات', description: 'يصنّف الآفات إلى سبع فئات: AKIEC و BCC و BKL و DF و MEL و NV و VASC — تغطي أكثر أنواع آفات الجلد شيوعاً.' },
      { title: 'درجة الثقة', description: 'يضمّن كل تنبؤ درجة ثقة تمكّن الأطباء من تقدير مدى قناعة النموذج بتشخيصه الأعلى.' },
      { title: 'أعلى التنبؤات', description: 'يعرض النظام أعلى الفئات المتوقّعة مرتّبة حسب الاحتمالية، مما يمنح الأطباء صورة أشمل لمخرجات النموذج.' },
      { title: 'القابلية للتفسير بـ Grad-CAM', description: 'يبرز تصور Grad-CAM مناطق الصورة التي أثّرت بقوة في تنبؤ النموذج، مما يساعد الأطباء على فهم استدلال الذكاء الاصطناعي وتقييمه.' },
      { title: 'بيانات المرضى', description: 'تُسجَّل بيانات المرضى وتُدار جنباً إلى جنب مع صور آفاتهم وسجل تنبؤاتهم داخل المنصة.' },
      { title: 'رفع الصور', description: 'واجهة رفع واضحة تتيح للأطباء إرسال صور آفات الجلد للتحليل الفوري بالذكاء الاصطناعي.' },
      { title: 'سجل المريض', description: 'يُحتفظ بسجل كامل لصور كل مريض وتنبؤاته وتقاريره، ويمكن الوصول إليه داخل النظام.' },
      { title: 'التقارير الطبية', description: 'تُولَّد تقارير طبية منظّمة لكل حالة، تجمع بيانات المريض والصورة والتنبؤ وتصور Grad-CAM.' },
      { title: 'لوحة التحليلات', description: 'توفر لوحة التحليلات نظرة عامة على الحالات والتنبؤات والاتجاهات عبر المنصة.' },
      { title: 'التقارير بصيغة PDF', description: 'يمكن تصدير تقارير الحالات بصيغة PDF للمشاركة أو الأرشفة أو الدمج في سير العمل السريري.' },
      { title: 'بنية متكاملة', description: 'واجهة React وخلفية FastAPI وقاعدة بيانات PostgreSQL وخط استدلال ذكاء اصطناعي — مصممة كنظام واحد متكامل.' },
    ],
    results: [
      { label: 'نموذج الذكاء الاصطناعي', value: 'EfficientNet' },
      { label: 'التصنيف', value: '7 فئات' },
      { label: 'مجموعة البيانات', value: 'HAM10000 + ISIC 2019' },
      { label: 'القابلية للتفسير', value: 'Grad-CAM' },
    ],
  },
};

const uiAr: Record<string, string> = {
  Home: 'الرئيسية', About: 'من نحن', Services: 'الخدمات', Projects: 'المشاريع', 'Why GNS': 'لماذا GNS',
  'Start a conversation': 'ابدأ محادثة', 'AI-first technology': 'تقنية تضع الذكاء الاصطناعي أولاً', 'partner in the Gulf': 'شريك في الخليج',
  "Build what's": 'نصنع', next: 'القادم', 'Explore our capabilities': 'اكتشف قدراتنا', 'Discover GNS': 'تعرّف على GNS',
  'From Artificial Intelligence and Machine Learning to intelligent applications and automation, GNS transforms ideas into practical technology designed to solve real-world problems.': 'من الذكاء الاصطناعي وتعلم الآلة إلى التطبيقات الذكية والأتمتة، نحوّل في GNS الأفكار إلى تقنيات عملية تحل مشكلات العالم الحقيقي.',
  'Muscat · Oman': 'مسقط · عُمان', 'Scroll to explore': 'مرّر للاستكشاف', 'Who we are': 'من نحن',
  'Intelligence is only powerful when it solves': 'الذكاء لا يصنع الفرق إلا حين يحل', 'real problems.': 'مشكلات حقيقية.',
  'We bring together AI research, engineering and product thinking to solve meaningful business challenges. From first concept to long-term growth, GNS makes intelligent systems practical, reliable and genuinely useful.': 'نجمع بين أبحاث الذكاء الاصطناعي والهندسة وتفكير المنتجات لمعالجة تحديات أعمال جوهرية. من الفكرة الأولى إلى النمو المستدام، نجعل في GNS الأنظمة الذكية عملية وموثوقة ومفيدة حقاً.',
  'More about GNS': 'المزيد عن GNS', 'What we do': 'ماذا نقدم', 'Intelligence for a': 'ذكاءٌ لعالم', 'changing world.': 'يتغيّر.',
  'From Artificial Intelligence and Machine Learning to intelligent applications and automation, we build the systems that help businesses move with confidence.': 'من الذكاء الاصطناعي وتعلم الآلة إلى التطبيقات الذكية والأتمتة، نبني الأنظمة التي تساعد الشركات على التقدم بثقة.',
  'View all capabilities': 'استعرض جميع القدرات', 'Big-picture thinking.': 'تفكيرٌ استراتيجي.', 'Grounded delivery.': 'وتنفيذٌ واقعي.',
  'We stay close to the real world — your people, your customers and the outcomes that matter. No hype. No unnecessary complexity. Just intelligent systems built to perform.': 'نبقى قريبين من الواقع — من فريقك وعملائك والنتائج التي تهمّك. بلا مبالغة ولا تعقيد غير ضروري. فقط أنظمة ذكية مبنية للأداء.',
  'Why clients choose us': 'لماذا يختارنا العملاء', 'Selected work': 'أعمال مختارة', 'Ideas turned into': 'أفكارٌ تتحول إلى', 'intelligence.': 'ذكاء.',
  'A glimpse into the kinds of AI challenges we love to take on.': 'لمحة عن تحديات الذكاء الاصطناعي التي نحب خوضها.', 'Case study': 'دراسة حالة', 'View case study': 'استعرض دراسة الحالة',
  "Have an AI challenge": 'هل لديك تحدٍ في الذكاء الاصطناعي', 'worth solving?': 'يستحق الحل؟', "Let's make progress": 'لنحقق التقدم معاً',
  'About GNS': 'عن GNS', 'Intelligence built around': 'ذكاءٌ مبني حول', 'people.': 'الإنسان.',
  'We are a Gulf-based AI-first technology company with a simple belief: the best intelligent systems are the ones that create real momentum.': 'نحن شركة تقنية خليجية تضع الذكاء الاصطناعي أولاً، ونؤمن إيماناً بسيطاً بأن أفضل الأنظمة الذكية هي التي تصنع زخماً حقيقياً.', 'Our story': 'قصتنا', 'Est. 2026': 'تأسست عام 2026',
  'Local perspective.': 'رؤيةٌ محلية.', 'Global standards.': 'ومعايرٌ عالمية.', 'Gulf Net Solution SPC was founded to help businesses in the region navigate a fast-changing AI landscape with a partner they can trust.': 'تأسست Gulf Net Solution SPC لمساعدة شركات المنطقة على اجتياز مشهد الذكاء الاصطناعي سريع التغير بشريك يُوثَق به.',
  'We combine an understanding of Gulf markets with modern AI engineering practices to deliver work that is ambitious, practical and built for the long term. Our team works across AI research, product and engineering — bringing the right people to the right problem.': 'نجمع بين فهم عميق لأسواق الخليج وممارسات هندسة الذكاء الاصطناعي الحديثة لتقديم أعمال طموحة وعملية ومبنية للمدى الطويل. يعمل فريقنا عبر أبحاث الذكاء الاصطناعي والمنتجات والهندسة — لنضع الشخص المناسب أمام المشكلة المناسبة.',
  'From Artificial Intelligence and Machine Learning to computer vision and intelligent automation, we help organisations use AI to solve real business problems — not to chase trends. Every engagement starts with listening, and ends with something measurable.': 'من الذكاء الاصطناعي وتعلم الآلة إلى الرؤية الحاسوبية والأتمتة الذكية، نساعد المؤسسات على توظيف الذكاء الاصطناعي لحل مشكلات أعمال حقيقية — لا لملاحقة الصيحات. يبدأ كل تعاون بالاستماع وينتهي بنتيجة قابلة للقياس.',
  'What guides us': 'ما الذي يوجّهنا', 'Principles that keep us': 'مبادئ تدفعنا', 'Principles that keep us moving forward.': 'مبادئ تدفعنا نحو الأمام.', 'Make it meaningful': 'أثرٌ حقيقي', 'Stay curious': 'فضولٌ دائم', 'Build trust': 'ثقةٌ متبادلة', 'Be precise': 'دقةٌ وانضباط', 'Think long-term': 'تفكيرٌ بعيد المدى', 'Stay grounded': 'واقعيةٌ عملية',
  'Our vision': 'رؤيتنا', 'A region where every business can use AI to': 'منطقة تستطيع فيها كل شركة توظيف الذكاء الاصطناعي من أجل', 'thrive.': 'الازدهار.', 'Our mission': 'رسالتنا',
  "To make exceptional AI accessible, useful and human for the businesses shaping the Gulf's future.": 'جعل الذكاء الاصطناعي الاستثنائي متاحاً ومفيداً وإنسانياً للشركات التي تصنع مستقبل الخليج.', 'How we work': 'كيف نعمل', 'An AI-first': 'نهجٌ يضع الذكاء الاصطناعي', 'approach.': 'أولاً.',
  Understand: 'نفهم', Architect: 'نخطط', Build: 'نبني', Sustain: 'نستمر', 'By the numbers': 'بالأرقام', 'What we bring to': 'ما نقدمه في', 'every engagement.': 'كل تعاون.', Founded: 'تاريخ التأسيس', 'AI capabilities': 'قدرات الذكاء الاصطناعي', 'Regional focus': 'تركيز إقليمي',
  'Our capabilities': 'قدراتنا', 'The right tools for': 'الأدوات المناسبة لـ', "what's next.": 'ما هو قادم.', 'We connect strategic thinking with deep AI expertise to create intelligent systems that are ready for the real world.': 'نربط التفكير الاستراتيجي بالخبرة العميقة في الذكاء الاصطناعي لإنشاء أنظمة ذكية جاهزة للعالم الحقيقي.', 'From first concept': 'من الفكرة الأولى', 'to full scale.': 'إلى التوسع الكامل.', 'full scale.': 'التوسع الكامل.', 'Every AI engagement is tailored to your goals, your context and your ambition.': 'كل تعاون في الذكاء الاصطناعي مصمم وفق أهدافك وسياقك وطموحك.',
  'Proof in the': 'الدليلُ في', 'possibility.': 'الإمكانات.', 'We partner with people who see an opportunity to use AI differently — and give them the intelligent systems to make it real.': 'نتعاون مع من يرون فرصة لاستخدام الذكاء الاصطناعي بطريقة مختلفة، ونمنحهم الأنظمة الذكية لتحويلها إلى واقع.', 'Case studies': 'دراسات الحالة', "Our portfolio is growing. Here's a closer look at the AI projects we're proud to have helped shape.": 'محفظة أعمالنا في نمو مستمر. إليك نظرة أقرب على مشاريع الذكاء الاصطناعي التي نفخر بالمساهمة في تشكيلها.', 'More projects': 'مشاريع أخرى', 'Also in the': 'أيضاً في', 'portfolio.': 'المحفظة.', 'A selection of additional AI engagements that demonstrate the breadth of our capabilities.': 'مجموعة من مشاريع الذكاء الاصطناعي الإضافية التي توضح اتساع قدراتنا.',
  'Why Choose GNS': 'لماذا تختار GNS', 'The difference is in': 'الفرقُ يكمن في', 'the delivery.': 'التنفيذ.', "Choosing an AI partner is a decision about trust, capability and fit. Here's what sets GNS apart.": 'اختيار شريك للذكاء الاصطناعي قرار يتعلق بالثقة والقدرة والملاءمة. إليك ما يميز GNS.', 'Our advantages': 'مزايا́نا', 'Reasons businesses': 'أسباب اختيار الشركات', 'choose GNS.': 'لـ GNS.', 'Innovation-driven AI solutions': 'حلول ذكاء اصطناعي تقودها الابتكار', 'Deep AI and ML expertise': 'خبرة عميقة في الذكاء الاصطناعي وتعلم الآلة', 'Business-focused approach': 'نهج يركز على الأعمال', 'Scalable and reliable AI systems': 'أنظمة ذكاء اصطناعي قابلة للتوسع وموثوقة', 'Long-term AI partnership': 'شراكة طويلة الأمد في الذكاء الاصطناعي',
  'Our approach': 'نهجنا', 'How we work.': 'كيف نعمل.', Design: 'نصمم', Support: 'ندعم',
  'Get in touch': 'تواصل معنا', "Let's start a": 'لنبدأ', 'conversation.': 'محادثة.', "Tell us what you're building, where you're headed or what's getting in the way. We'll take it from there.": 'أخبرنا بما تبنيه وإلى أين تتجه وما الذي يعترض طريقك. سنتولى الباقي.', 'Contact details': 'بيانات التواصل', 'Good things start': 'كل بداية طيبة', 'with a hello.': 'بكلمة مرحباً.', "Whether you have a clear AI brief or an early idea, our team is ready to listen. Reach out and we'll get back to you within one business day.": 'سواء كانت لديك متطلبات واضحة للذكاء الاصطناعي أو مجرد فكرة أولية، فريقنا مستعد للاستماع. تواصل معنا وسنرد عليك خلال يوم عمل واحد.', 'Gulf Region': 'منطقة الخليج', 'Follow along': 'تابعنا', 'Full name': 'الاسم الكامل', 'Email address': 'البريد الإلكتروني', Company: 'الشركة', optional: 'اختياري', Phone: 'رقم الهاتف', 'Service / Project type': 'نوع الخدمة / المشروع', 'Select a service...': 'اختر خدمة...', Other: 'أخرى', 'Other / Not sure yet': 'أخرى / لست متأكداً بعد', Message: 'الرسالة', 'Your name': 'اسمك', 'Your company': 'اسم شركتك', 'Tell us a little about your project or challenge...': 'أخبرنا شيئاً عن مشروعك أو تحديك...', 'Send inquiry': 'إرسال الطلب', Sending: 'جارٍ الإرسال...', "Thanks — your message has been received. We'll be in touch within one business day.": 'شكراً — وصلتنا رسالتك. سنتواصل معك خلال يوم عمل واحد.', 'Navigate': 'تصفّح', "Built for what's next.": 'مبني لما هو قادم.', 'All rights reserved.': 'جميع الحقوق محفوظة.',
  'moving forward.': 'نحو الأمام.',
  'Performance': 'الأداء', 'Security': 'الأمن', 'Scalability': 'قابلية التوسع', 'Reliability': 'الموثوقية',
  'We do this by combining deep technical expertise with an honest understanding of the region — building intelligent systems that fit the way Gulf organisations actually work.': 'نحقق ذلك بالجمع بين الخبرة التقنية العميقة والفهم الصادق للمنطقة — ببناء أنظمة ذكية تناسب طريقة عمل المؤسسات الخليجية فعلياً.',
  'Intelligence in motion.': 'ذكاءٌ يصنع الفرق.', 'Computer vision': 'الرؤية الحاسوبية', 'deep learning': 'التعلم العميق', Featured: 'مميز', 'View Case Study': 'استعرض دراسة الحالة', 'Screenshot': 'لقطة شاشة', Overview: 'نظرة عامة', 'The story behind the': 'القصة وراء', 'build.': 'البناء.', 'The challenge': 'التحدّي', 'Turning complex signals into a clear next': 'تحويل الإشارات المعقدة إلى خطوة تالية', 'step.': 'واضحة.', 'The solution': 'الحل', 'A thoughtful interface for': 'واجهة مدروسة لـ', 'intelligent systems.': 'الأنظمة الذكية.', 'The toolkit': 'الأدوات', 'AI technology that does the': 'تقنيات ذكاء اصطناعي تتولى', 'heavy lifting.': 'العمل الشاق.', Results: 'النتائج', 'Outcomes that': 'نتائج', 'matter.': 'مهمة.', Gallery: 'المعرض', 'Project': 'مشروع', 'showcase.': 'استعراض.',
  'Please enter your name.': 'يرجى إدخال اسمك.', 'Please enter your email.': 'يرجى إدخال بريدك الإلكتروني.', 'Please enter a valid email address.': 'يرجى إدخال بريد إلكتروني صحيح.', 'Please select a service type.': 'يرجى اختيار نوع الخدمة.', 'Please enter a message.': 'يرجى إدخال رسالة.', 'Message should be at least 10 characters.': 'يجب أن تتكون الرسالة من 10 أحرف على الأقل.', 'Please correct the highlighted fields and try again.': 'يرجى تصحيح الحقول المحددة والمحاولة مرة أخرى.',
  'We build intelligent systems that turn ambitious ideas into real-world solutions.': 'نبني أنظمة ذكية تحوّل الأفكار الطموحة إلى حلول في العالم الحقيقي.',
  'Gulf Net Solution SPC is a Gulf-based AI-first technology company helping businesses across the region solve real problems with intelligent systems, machine learning and automation.': 'Gulf Net Solution SPC شركة تقنية خليجية تضع الذكاء الاصطناعي أولاً، وتساعد الشركات في جميع أنحاء المنطقة على حل مشكلات حقيقية بأنظمة ذكية وتعلم آلي وأتمتة.',
  'We design and deploy AI systems that solve meaningful business challenges — from reasoning engines and decision-support platforms to intelligent agents that adapt and improve over time. Our AI solutions are built to be explainable, reliable and production-ready.': 'نصمم وننشر أنظمة ذكاء اصطناعي تعالج تحديات أعمال جوهرية — من محركات الاستدلال ومنصات دعم القرار إلى وكلاء أذكياء يتكيّفون ويتطورون مع الوقت. حلولنا مبنية لتكون قابلة للتفسير وموثوقة وجاهزة للإنتاج.',
  'We build machine learning models that turn your data into a competitive advantage — from predictive analytics and forecasting to classification and recommendation systems. Our models are engineered for accuracy, interpretability and real-world performance.': 'نبني نماذج تعلم آلي تحوّل بياناتك إلى ميزة تنافسية — من التحليلات التنبؤية والتوقعات إلى التصنيف وأنظمة التوصية. نماذجنا مصممة للدقة والقابلية للتفسير والأداء في العالم الحقيقي.',
  'We build computer vision systems that extract meaning from visual data — from image classification and object detection to medical imaging and real-time video analysis. Our solutions combine deep learning with intuitive interfaces for practical, real-world use.': 'نبني أنظمة رؤية حاسوبية تستخرج المعنى من البيانات البصرية — من تصنيف الصور واكتشاف الكائنات إلى التصوير الطبي وتحليل الفيديو اللحظي. تجمع حلولنا التعلم العميق مع واجهات بديهية لاستخدام عملي في العالم الحقيقي.',
  'We build applications powered by generative AI — from intelligent content generation and conversational interfaces to custom model fine-tuning and retrieval-augmented systems. Our generative AI solutions are designed to be practical, controllable and grounded in your data.': 'نبني تطبيقات مدعومة بالذكاء الاصطناعي التوليدي — من توليد المحتوى الذكي والواجهات الحوارية إلى ضبط النماذج المخصصة وأنظمة الاسترجاع المعزز. حلولنا مصممة لتكون عملية وقابلة للتحكم ومبنية على بياناتك.',
  'We combine AI with automation to build systems that do not just repeat tasks — they understand, decide and improve. From intelligent document processing to AI-driven workflows, we make operations smarter, faster and more adaptive.': 'نجمع الذكاء الاصطناعي بالأتمتة لبناء أنظمة لا تكرر المهام فحسب — بل تفهم وتقرر وتتحسن. من معالجة المستندات الذكية إلى سير العمل المدفوع بالذكاء الاصطناعي، نجعل عملياتك أكثر ذكاءً وسرعة ومرونة.',
  'We turn AI concepts into complete, production-ready applications. From model integration and API design to full-stack development and deployment, we build AI-powered software that fits seamlessly into your operations and delivers measurable value.': 'نحوّل مفاهيم الذكاء الاصطناعي إلى تطبيقات كاملة جاهزة للإنتاج. من تكامل النماذج وتصميم واجهات البرمجة إلى التطوير المتكامل والنشر، نبني برمجيات مدعومة بالذكاء الاصطناعي تتكامل بسلاسة مع عملياتك وتقدّم قيمة قابلة للقياس.',
  'We approach every problem as an opportunity to do something better. Rather than reaching for the obvious answer, we look for the AI solution that creates lasting advantage — combining proven engineering with fresh thinking.': 'نتعامل مع كل مشكلة كفرصة لفعل شيء أفضل. بدلاً من الاكتفاء بالإجابة السهلة، نبحث عن حل الذكاء الاصطناعي الذي يصنع ميزة دائمة — جامعين بين هندسة مثبتة وتفكير متجدد.',
  'From machine learning and computer vision to generative AI and intelligent automation, we bring the technologies that matter — applied where they create real value, not just novelty.': 'من تعلم الآلة والرؤية الحاسوبية إلى الذكاء الاصطناعي التوليدي والأتمتة الذكية، نقدم التقنيات المهمة — مطبقة حيث تصنع قيمة حقيقية لا مجرد حداثة.',
  'AI is only useful when it serves the business. We start with your goals, your market and your constraints — and build intelligent systems that fit the way your organisation actually works.': 'الذكاء الاصطناعي لا ينفع إلا حين يخدم الأعمال. نبدأ بأهدافك وسوقك وقيودك — ونبني أنظمة ذكية تناسب طريقة عمل مؤسستك فعلياً.',
  'We engineer intelligent systems to grow with you. Performance, security and maintainability are designed in from the start — so your investment keeps delivering as demand and complexity increase.': 'نهندس أنظمة ذكية لتنمو معك. الأداء والأمن وقابلية الصيانة مصممة من البداية — ليستمر استثمارك في العطاء مع نمو الطلب والتعقيد.',
  'We are not a one-project vendor. We stay engaged — maintaining, improving and extending your AI systems over time, building a relationship that compounds in value with every cycle.': 'لسنا مزوداً لمشروع واحد. نبقى معك — نحسن ونطور ونوسع أنظمة الذكاء الاصطناعي لديك مع الوقت، مبنيين علاقة تتنامى قيمتها مع كل دورة.',
  'We start with the business, not the technology. What are you trying to achieve? What gets in the way? The right solution follows from the right questions.': 'نبدأ بالأعمال لا بالتقنية. ما الذي تسعى لتحقيقه؟ ما الذي يعترض طريقك؟ الحل الصحيح ينبع من الأسئلة الصحيحة.',
  'We design systems that fit the problem — choosing tools and patterns deliberately, and planning for scale, security and maintainability from day one.': 'نصمم أنظمة تناسب المشكلة — نختار الأدوات والأنماط بتعمد، ونخطط للتوسع والأمن وقابلية الصيانة من اليوم الأول.',
  'We ship in tight iterations, with working software at every stage. Nothing arrives as a surprise — you see progress and can steer throughout.': 'نسلم في دورات قصيرة ببرمجيات عاملة في كل مرحلة. لا شيء يأتي كمفاجأة — ترى التقدم وتستطيع التوجيه في كل خطوة.',
  'Launch is a milestone, not the finish line. We stay engaged to monitor, refine and extend — so the system keeps delivering long after it goes live.': 'الإطلاق محطة لا خط نهاية. نبقى معك للمراقبة والتحسين والتوسيع — ليستمر النظام في العطاء طويلاً بعد إطلاقه.',
  'We start by listening — to your goals, your constraints and the problem you\'re really trying to solve.': 'نبدأ بالاستماع — لأهدافك وقيودك والمشكلة التي تحاول حلها حقاً.',
  'We shape an AI solution around your context — architecting for performance, security and long-term maintainability.': 'نشكّل حل الذكاء الاصطناعي حول سياقك — ببنية مصممة للأداء والأمن وقابلية الصيانة طويلة الأمد.',
  'We deliver in iterative cycles, keeping you informed and involved at every stage of the process.': 'نسلم في دورات تكرارية، نبقيك على اطلاع ومشارك في كل مرحلة من العملية.',
  'We stay engaged after launch — monitoring, improving and ensuring your AI systems keep performing.': 'نبقى معك بعد الإطلاق — نراقب ونحسن ونضمن استمرار أنظمة الذكاء الاصطناعي لديك في الأداء.',
  'A measure of the depth and range we apply to each AI project — not a trophy case.': 'مقياس للعمق والاتساع الذي نطبقه في كل مشروع ذكاء اصطناعي — لا مجرد أرقام للعرض.',
  'We bring engineering discipline and product thinking to every engagement — turning complex problems into intelligent systems that are reliable, maintainable and built to scale.': 'نقدم الانضباط الهندسي وتفكير المنتجات في كل تعاون — نحوّل المشكلات المعقدة إلى أنظمة ذكية موثوقة وقابلة للصيانة ومبنية للتوسع.',
  'Back to projects': 'العودة إلى المشاريع',
  'work.': 'نعمل.',
  'engagement.': 'تعاون.',
  'with a': 'بكلمة',
  "A visual look at the platform's interface and capabilities.": 'نظرة بصرية على واجهة المنصة وقدراتها.',
  'How we': 'كيف',
  'to ': 'إلى ',
  'the ': '',
  'choose ': 'لـ ',
  'every ': 'كل ',
  'delivery.': 'التنفيذ.',
  'Featured project': 'المشروع المميز',
  'DermaVision AI is our featured flagship project — a full-stack AI platform for skin lesion analysis and clinical decision support.': 'DermaVision AI هو مشروعنا الرئيسي والمميز — منصة متكاملة بالذكاء الاصطناعي لتحليل آفات الجلد ودعم القرار السريري.',
  'Dataset & model': 'مجموعة البيانات والنموذج',
  'Training data and': 'بيانات التدريب و',
  'AI architecture.': 'بنية الذكاء الاصطناعي.',
  'Dataset': 'مجموعة البيانات',
  'AI model': 'نموذج الذكاء الاصطناعي',
  'Image processing': 'معالجة الصور',
  'Classification': 'التصنيف',
  'Seven skin lesion': 'سبع فئات لآفات',
  'categories.': 'الجلد.',
  'Explainability': 'القابلية للتفسير',
  'visualization.': 'التصور.',
  'Grad-CAM': 'Grad-CAM',
};

export function translate(value: string, language: Language): string {
  if (language === 'ar') return uiAr[value] || value;
  return value;
}

export function tService(service: Service, language: Language): Service {
  if (language === 'en') return service;
  const ar = servicesAr[service.title];
  if (!ar) return service;
  return { ...service, ...ar };
}

export function tProject(project: ProjectCaseStudy, language: Language): ProjectCaseStudy {
  if (language === 'en') return project;
  const ar = projectsAr[project.slug];
  if (!ar) return project;
  return { ...project, ...ar };
}
