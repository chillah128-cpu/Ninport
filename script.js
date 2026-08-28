// script.js
(function() {
  // ----- ДАННЫЕ ПРОЕКТОВ (6 работ) -----
  const projects = [
    {
      id: 0,
      title: 'Product design (Продуктовый дизайн)',
      desc: 'Айдентика и брендинг. Identity and branding. 2026.',
      hasVideo: false,
      banner: "photo/Group 825.png",
      sections: [
        {
          id: 'Coffe Machine',
          title: 'Айдентика Coffe Machine. \nCoffe Machine visual identity. 2026.',
          banner: 'photo/Group 800.png',
          items: [
            { type: 'image', src: 'photo/menuкопия.png' },
            { type: 'text', text: 'Айдентика Coffe Machine. 2026.\nСоздано с помощью Figma. \nРазработан логотип, меню, упаковка дрип-пакетов и кофейных зерен. \nCoffe Machine visual identity. 2026. \nCreated using Figma. Logo, menu, and packaging for drip bags and coffee beans designed.'},
            { type: 'image', src: 'photo/кадркопия.png' },
            { type: 'text', text: 'Кофейные зёрна \nСерия упаковок с цветовым кодированием сортов и общей системой фирменной графики.' },
            { type: 'text', text: 'Coffee beans — a packaging series featuring color-coding for varieties and a unified brand graphic system.' },
            { type: 'image', src: 'photo/дрипы.png' },
            { type: 'text', text: 'Дрип-кофе \nСистема упаковки для двух вкусовых вариантов с единым визуальным оформлением.' },
            { type: 'text', text: 'Drip coffee — packaging system for two flavor variants featuring a unified visual design.' },
            { type: 'image', src: 'photo/cards.png' },
            { type: 'text', text: 'Подарочные карты \nДва цветовых варианта в рамках единой айдентики Coffee Machine.' },
            { type: 'text', text: 'Gift cards. Two color options within the unified Coffee Machine visual identity.' },
            { type: 'image', src: 'photo/лого.png' },
            { type: 'text', text: 'Варианты логотипов \nРасширенный логотип на подходящих подложках и малый логотип в соответствующих цветах.' },
            { type: 'text', text: 'Logo variations \nExtended logo on suitable backgrounds and small logo in appropriate colors.' },
            { type: 'image', src: 'photo/menu.png' },
            { type: 'text', text: 'Прототип меню кофейни для стационарных фелиалов.' },
            { type: 'text', text: 'Coffee shop menu prototype for brick-and-mortar locations.' },
            { type: 'image', src: 'photo/прототипкарточек.png' },
            { type: 'text', text: 'Прототип подарочных карт.' },
            { type: 'text', text: 'Gift card prototype.' },
            { type: 'image', src: 'photo/ДрипыПрототип.png' },
            { type: 'text', text: 'Прототип упаковки дрип-пакетов.' },
            { type: 'text', text: 'Drip bag packaging prototype.' },
            { type: 'image', src: 'photo/ЗернышкиД.png' },
            { type: 'text', text: 'Прототип упаковки кофейных зерен.' },
            { type: 'text', text: 'Coffee bean packaging prototype.' }
          ]
        },
        {
          id: 'Logo-book',
          title: 'Logo-book',
          banner: 'photo/Frame 20.png',
          items: [
            { type: 'text', text: 'Логобук содержит ручную стилизацию и 3 разновидности логотипов' },
            { type: 'text', text: 'The logobook contains a custom-lettered design and three logo variations.' },
            { type: 'carousel',
              title: 'Листайте вправо (Slide to the left)',
              images: [
                'photo/Frame 18.png',
                'photo/Frame 9.png',
                'photo/Frame 10.png',
                'photo/Frame 11.png',
                'photo/Frame 12.png',
                'photo/Frame 13.png',
                'photo/Frame 14.png',
                'photo/Frame 15.png',
                'photo/Frame 16.png',
                'photo/Frame 17.png',
                'photo/Frame 19.png',
                'photo/Frame 20.png',
                'photo/Frame 21.png',
                'photo/Frame 23.png'
              ]
            }
          ]
        },

        {
          id: 'Омск',
          title: 'Брендинг города Омск для горожан и туристов (Omsk city branding)',
          banner: 'photo/456258303.png',
          items: [
            { 
              type: 'text', 
              text: 'Брендинг города Омск и разработка надлежащей айдентики. Групповая работа, в которой я принимала участие в качестве дизайнера.' 
            },
            { 
              type: 'text', 
              text: 'Branding for the city of Omsk and development of a suitable visual identity. A group project in which I participated as a designer.' 
            },
            {
              type: 'carousel',
              title: 'Листайте вправо (Slide to the left)',
              images: [
                'photo/14.png',
                'photo/456258292.png',
                'photo/456258293.png',
                'photo/17.png',
                'photo/18.png',
                'photo/456258297.png',
                'photo/456258298.png',
                'photo/456258295.png',
                'photo/22.png',
                'photo/456258296.png',
                'photo/28.png',
                'photo/456258300.png',
                'photo/30.png',
                'photo/31.png',
                'photo/32.png',
                'photo/34.png',
                'photo/35.png',
                'photo/36.png',
                'photo/37.png',
                'photo/38.png',
                'photo/39.png',
                'photo/40.png',
                'photo/41.png',
                'photo/42.png',
                'photo/43.png',
                'photo/456258301.png',
                'photo/45.png',
                'photo/46.png',
                'photo/47.png',
                'photo/48.png',
                'photo/49.png',
                'photo/50.png',
                'photo/51.png',
                'photo/52.png',
                'photo/53.png',
                'photo/54.png',
                'photo/55.png',
                'photo/56.png',
                'photo/57.png',
                'photo/58.png'
              ]
            }
          ]
        }
      ]
    },
      
    {
      id: 1,
      title: 'WEB-разработка (Web development)',
      desc: 'Ниже представлены ссылки на сайты разной специфики, в работе с которыми я была как соло-разработчик, так и часть команды (тим-лид/дизайнер лендинга или копирайтер) \nBelow are links to websites across various sectors; I worked on these projects either as a solo developer or as part of a team (serving as a team lead, landing page designer, or copywriter).',
      hasVideo: false,
      banner: 'photo/Group 826.png',
      content: [
        {
          type: 'link',
          title: 'Сайт с интерактивным 3d-элементом (Web-page with interactive 3d element)',
          url: 'https://3dportfolio-msjpjrsww-ninorinnies-projects.vercel.app/',
          icon: '🔗',
          description: 'Многостраничный сайт с описанием моих работ в 3d-моделировании'
        },
        {
          type: 'link',
          title: 'Сайт-визитка для доставки еды (Simple website for a food delivery service)',
          url: 'https://fineat.vercel.app/',
          icon: '🔗',
          description: 'Одностраничный сайт с формой обратной связи, которую можно собирать в личную базу данных. Адаптивный.'
        },
        {
          type: 'link',
          title: 'Сайт с ботом(Web-page with feedback going to your tg-bot)',
          url: 'https://cafe-nine-mu.vercel.app/',
          icon: '🔗',
          description: 'Одностраничный сайт; форма обратной связи привязана к боту в телеграмм'
        },
        {
          type: 'link',
          title: 'Сайт портфолио с фильтром и интерактивным элементом (Interactive element + filter)',
          url: 'https://port-mocha-xi.vercel.app/',
          icon: '🔗',
          description: 'Голова на сайте следит за курсором, фильтр отбирает проекты по критериям (представленые проекты являются устаревшими)'
        }
      ]
    },
  
    {
      id: 2,
      title: '3D моделирование/анимация/game-ready модели',
      desc: '3D моделирование/анимация/game-ready модели. (3d animations/game-ready models)',
      banner: 'photo/Group 824.png',
      sections: [
        {
          id: 'section-1',
          hasVideo: true,
          banner: 'photo/Screenshot_52.png',
          title: 'Animations',
          items: [
            { type: 'text', text: 'Весь ход работы с моделями выполнен по стандартному пайп-лайну, пропсы и окружения чаще всего зимствованны из Fab-библиотеки)' },
            { type: 'text', text: 'The entire workflow for the models followed a standard pipeline; props and environment assets were mostly sourced from the Fab library)' },
            { type: 'video', src: 'photo/vid.mp4'},
            { type: 'text', text: '3D анимация персонажа. Методики анимации: простая/скелетная и по кривым. Zbrush/Blender/Unreal Engine 5' },
            { type: 'text', text: '3D character animation. Animation techniques: simple/skeletal and curve-based. ZBrush/Blender/Unreal Engine 5' },
            { type: 'video', src: 'photo/0000-0960 (1).mp4' },
            { type: 'text', text: 'Анимация "Welcome to Vietnam". Методики анимации: простая/скелетная и по кривым. Blender.' },
            { type: 'text', text: 'Welcome to Vietnam" animation. Animation techniques: simple/skeletal and curve-based. Blender.' },
            { type: 'video', src: 'photo/a0001-0920.mp4' },
            { type: 'text', text: 'Ранний прототип первого проекта (со звуком). Методики анимации: простая/скелетная и по кривым. Blender.' },
            { type: 'text', text: 'Early prototype of the first project (with sound). Animation techniques: simple/skeletal and curve-based. Blender.' },
            { type: 'video', src: 'photo/р0000-0920.mp4' },
            { type: 'text', text: 'Анимация для предполагаемого бренда G_glasses. Методики анимации: простая/скелетная и по кривым. Blender.' },
            { type: 'text', text: 'Animation for the fictional G_glasses brand. Animation techniques: simple/skeletal and curve-based. Blender.' }
          ]
        },

        {
          id: 'section-2',
          hasVideo: false,
          banner: 'photo/3d.png',
          title: 'Game-ready models',
          items: [
            { type: 'text', text: 'Весь ход работы с моделями выполнен по стандартному пайп-лайну, Блокинг - драфт - highpoly - lowpoly - baking - texturing - render.)' },
            { type: 'text', text: 'The entire modeling workflow followed the standard pipeline: blocking, draft, high-poly, low-poly, baking, texturing, and rendering.)' },
            { type: 'image', src: 'photo/Group 829.png'},
            { type: 'text', text: 'Выше представлен итоговый рендер' },
            { type: 'text', text: 'The final render is shown above' },
            { type: 'image', src: 'photo/Group 830.png' },
            { type: 'text', text: 'Драфт (Draft)' },
            { type: 'image', src: 'photo/Group 831.png' },
            { type: 'text', text: 'Highpoly' },
            { type: 'image', src: 'photo/Group 5.png' },
            { type: 'text', text: 'Lowpoly' },
            { type: 'image', src: 'photo/Group 813.png' },
            { type: 'image', src: 'photo/Group 814.png' }
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Ручная графика (работы концептов персонажей и т.д.) Hand-drawn artwork (character concept art, etc.)',
      desc: 'Ручная графика (работы концептов персонажей и т.д.)',
      hasVideo: false,
      banner: 'photo/Group 823.png',
      sections: [
        {
          id: 'section-1',
          banner: 'photo/oformlenie-proekta-new-g-dla-procreate-kopia (1) копия.png',
          title: 'Концепт-арт персонажа по курсу HDS',
          items: [
            { type: 'text', text: 'Все работы выполнены лично мной с помощью инструментов Adobe Photoshop' },
            { type: 'text', text: 'All works were done personally by me using Adobe Photoshop.' },
            { type: 'image', src: 'photo/oformlenie-proekta-new-g-dla-procreateillustracia-kopia копия.png'},
            { type: 'image', src: 'photo/oformlenie-proekta-new-g-dla-procreatepersonaz-kopia копия.png' },
            { type: 'image', src: 'photo/oformlenie-proekta-new-g-dla-procreatesunduk-kopia (1) копия.png' }
          ]
        }
      ]
    }
  ];

  const gallery = document.getElementById('gallery-container');
  const pagesContainer = document.getElementById('project-pages-container');

  function renderGallery() {
    gallery.innerHTML = '';
    projects.forEach((p, index) => {
      const card = document.createElement('div');
      card.className = 'card';
      const img = document.createElement('img');
      img.src = p.banner;
      img.alt = p.title;
      img.loading = 'lazy';
      const label = document.createElement('div');
      label.className = 'card-label';
      label.textContent = p.title;

      card.appendChild(img);
      card.appendChild(label);
      card.addEventListener('click', () => {
        showProject(index);
      });
      gallery.appendChild(card);
    });
  }

  function hasSections(project) {
    return project.sections && project.sections.length > 0;
  }

  function renderSectionItem(item) {
    const container = document.createElement('div');
    container.className = 'section-item';
    container.style.marginBottom = '30px';

    if (item.type === 'image') {
      container.innerHTML = `
        <img src="${item.src}" alt="изображение" style="width: 100%; border-radius: 8px; display: block;">
      `;
    } else if (item.type === 'video') {
      container.innerHTML = `
        <div style="background: #0a0a0e; border-radius: 12px; padding: 20px; border: 1px solid #e8e8ec;">
          <video controls style="width: 100%; border-radius: 8px; background: #1a1a1a; display: block; min-height: 300px; max-height: 600px;">
            <source src="${item.src}" type="video/mp4">
            Ваш браузер не поддерживает видео
          </video>
        </div>
      `;
      console.log('🎬 Видео добавлено:', item.src);
    } else if (item.type === 'pdf') {
      container.innerHTML = `
        <div style="background: #f8f8fa; border-radius: 12px; padding: 20px; border: 1px solid #e8e8ec;">
          <iframe src="${item.src}" style="width: 100%; height: 600px; border: none; border-radius: 8px; background: #f5f5f5;"></iframe>
          <a href="${item.src}" download="${item.title || 'document.pdf'}" style="display: inline-block; margin-top: 12px; padding: 10px 24px; background: #1a1a1a; color: white; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">📥 Скачать PDF</a>
        </div>
      `;
    } else if (item.type === 'text') {
      container.innerHTML = `
        <div style="font-size: 1rem; line-height: 1.6; color: #1a1a1a; white-space: pre-wrap; padding: 0.5rem 0.2rem;">${item.text}</div>
      `;
    } else if (item.type === 'carousel') {
      container.innerHTML = `
        <div style="background: #f8f8fa; border-radius: 12px; padding: 20px; border: 1px solid #e8e8ec;">
          <div style="font-size: 1.1rem; font-weight: 500; margin-bottom: 15px; color: #1a1a1a;">${item.title || 'Галерея'}</div>
          <div class="carousel-container" style="position: relative; overflow: hidden; border-radius: 8px;">
            <div class="carousel-track" style="display: flex; transition: transform 0.5s ease; will-change: transform;">
              ${item.images.map((src, idx) => `
                <div class="carousel-slide" style="min-width: 100%; flex-shrink: 0;">
                  <img src="${src}" alt="Слайд ${idx + 1}" style="width: 100%; height: auto; max-height: 500px; object-fit: contain; border-radius: 8px; background: white;">
                </div>
              `).join('')}
            </div>
            <button class="carousel-prev" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.6); color: white; border: none; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; font-size: 20px; z-index: 10; transition: background 0.2s;">‹</button>
            <button class="carousel-next" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.6); color: white; border: none; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; font-size: 20px; z-index: 10; transition: background 0.2s;">›</button>
            <div class="carousel-dots" style="position: absolute; bottom: 15px; left: 50%; transform: translateX(-50%); display: flex; gap: 8px; z-index: 10;"></div>
          </div>
        </div>
      `;

      // Инициализируем карусель
      setTimeout(() => {
        const containerEl = container.querySelector('.carousel-container');
        if (!containerEl) return;
        
        const track = containerEl.querySelector('.carousel-track');
        const slides = containerEl.querySelectorAll('.carousel-slide');
        const prevBtn = containerEl.querySelector('.carousel-prev');
        const nextBtn = containerEl.querySelector('.carousel-next');
        const dotsContainer = containerEl.querySelector('.carousel-dots');
        
        let currentIndex = 0;
        const totalSlides = slides.length;

        // Создаем точки
        slides.forEach((_, idx) => {
          const dot = document.createElement('span');
          dot.className = 'carousel-dot';
          dot.style.cssText = `
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${idx === 0 ? 'white' : 'rgba(255,255,255,0.4)'};
            cursor: pointer;
            transition: background 0.3s;
            border: none;
          `;
          dot.addEventListener('click', () => goToSlide(idx));
          dotsContainer.appendChild(dot);
        });

        function goToSlide(index) {
          currentIndex = index;
          track.style.transform = `translateX(-${currentIndex * 100}%)`;
          
          // Обновляем точки
          dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, idx) => {
            dot.style.background = idx === currentIndex ? 'white' : 'rgba(255,255,255,0.4)';
          });
        }

        prevBtn.addEventListener('click', () => {
          goToSlide((currentIndex - 1 + totalSlides) % totalSlides);
        });

        nextBtn.addEventListener('click', () => {
          goToSlide((currentIndex + 1) % totalSlides);
        });

        // Клавиши влево/вправо
        document.addEventListener('keydown', (e) => {
          if (containerEl.closest('.project-page.active-page')) {
            if (e.key === 'ArrowLeft') prevBtn.click();
            if (e.key === 'ArrowRight') nextBtn.click();
          }
        });

      }, 100);
    }

    return container;
  }

  // ---------- РЕНДЕР СТРАНИЦ ПРОЕКТОВ ----------
  function renderProjectPages() {
    pagesContainer.innerHTML = '';
    projects.forEach((p, index) => {
      const page = document.createElement('div');
      page.id = `project-${index}`;
      page.className = 'project-page hidden-page';

      // Кнопка возврата
      const backBar = document.createElement('div');
      backBar.className = 'back-bar';
      const backBtn = document.createElement('button');
      backBtn.className = 'back-btn';
      backBtn.innerHTML = '<span>← main page</span>';
      backBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showMain();
      });
      backBar.appendChild(backBtn);
      page.appendChild(backBar);

      // Баннер проекта
      const bannerDiv = document.createElement('div');
      bannerDiv.className = 'project-banner';
      
      if (hasSections(p)) {
        bannerDiv.style.cursor = 'pointer';
        bannerDiv.addEventListener('click', () => {
          showSection(index, 0);
        });
      }

      bannerDiv.innerHTML = `
        <img src="${p.banner}" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover;">
      `;
      page.appendChild(bannerDiv);

      // Заголовок и описание
      const title = document.createElement('h2');
      title.className = 'project-title';
      title.textContent = p.title;
      page.appendChild(title);

      const desc = document.createElement('div');
      desc.className = 'project-desc';
      desc.textContent = p.desc;
      page.appendChild(desc);

      // Если есть секции
      if (hasSections(p)) {
        const sectionsContainer = document.createElement('div');
        sectionsContainer.className = 'project-gallery';
        sectionsContainer.style.cssText = 'display: flex; flex-direction: column; gap: 2rem;';
        
        p.sections.forEach((section, sectionIndex) => {
          const sectionBlock = document.createElement('div');
          sectionBlock.className = 'section-preview';
          sectionBlock.style.cssText = 'background: #ffffff; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 12px rgba(0,0,0,0.04); border: 1px solid #f0f0f0; cursor: pointer; position: relative; transition: transform 0.2s;';
          
          sectionBlock.addEventListener('mouseenter', () => {
            sectionBlock.style.transform = 'translateY(-4px)';
          });
          sectionBlock.addEventListener('mouseleave', () => {
            sectionBlock.style.transform = 'translateY(0)';
          });
          
          sectionBlock.addEventListener('click', () => {
            showSection(index, sectionIndex);
          });

          // Превью
          let previewSrc = section.banner || p.banner;
          if (!section.banner) {
            const firstItem = section.items.find(item => item.type === 'image' || item.type === 'video' || item.type === 'pdf');
            if (firstItem) {
              if (firstItem.type === 'pdf') {
                previewSrc = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23f5f5f5" rx="8"/%3E%3Ctext x="50" y="55" font-size="40" text-anchor="middle" font-family="Arial"%3E📄%3C/text%3E%3C/svg%3E';
              } else if (firstItem.type === 'video') {
                previewSrc = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%231a1a1a" rx="8"/%3E%3Ctext x="50" y="55" font-size="40" text-anchor="middle" font-family="Arial"%3E▶️%3C/text%3E%3C/svg%3E';
              } else {
                previewSrc = firstItem.src;
              }
            }
          }

          sectionBlock.innerHTML = `
            <img src="${previewSrc}" alt="${section.title || 'Секция'}" style="width: 100%; border-radius: 8px; margin-bottom: 1rem; background: #f5f5f5; object-fit: cover; max-height: 300px;">
            <div style="font-size: 1.2rem; font-weight: 500; color: #1a1a1a;">${section.title || 'Открыть работы'}</div>
            <div style="position: absolute; top: 1.5rem; right: 1.5rem; font-size: 1.5rem; color: #aaa; transition: transform 0.2s;">→</div>
          `;

          const arrow = sectionBlock.querySelector('div:last-child');
          sectionBlock.addEventListener('mouseenter', () => {
            arrow.style.transform = 'translateX(6px)';
            arrow.style.color = '#333';
          });
          sectionBlock.addEventListener('mouseleave', () => {
            arrow.style.transform = 'translateX(0)';
            arrow.style.color = '#aaa';
          });

          sectionsContainer.appendChild(sectionBlock);
        });

        page.appendChild(sectionsContainer);
      } else {
        // Обычный рендеринг для проектов без секций (Омск, WEB-разработка)
        const projGallery = document.createElement('div');
        projGallery.className = 'project-gallery';
        projGallery.style.cssText = 'display: flex; flex-direction: column; gap: 2rem;';

        const linksContainer = document.createElement('div');
        linksContainer.style.cssText = 'display: flex; flex-wrap: wrap; gap: 25px; justify-content: center; width: 100%; margin: 10px 0;';

        if (p.content) {
          p.content.forEach(item => {
            if (item.type === 'image') {
              const img = document.createElement('img');
              img.src = item.src;
              img.alt = 'gallery';
              img.loading = 'lazy';
              img.style.cssText = 'width: 100%; border-radius: 8px; display: block;';
              projGallery.appendChild(img);
            }

            if (item.type === 'text') {
              const text = document.createElement('div');
              text.className = 'project-inline-text';
              text.textContent = item.text;
              text.style.cssText = 'white-space: pre-line; padding: 0.5rem 0;';
              projGallery.appendChild(text);
            }

            if (item.type === 'pdf') {
              const pdfContainer = document.createElement('div');
              pdfContainer.style.cssText = 'background: #f8f8fa; border-radius: 12px; padding: 20px; border: 1px solid #e8e8ec;';
              pdfContainer.innerHTML = `
                <iframe src="${item.src}" style="width: 100%; height: 600px; border: none; border-radius: 8px; background: #f5f5f5;"></iframe>
                <a href="${item.src}" download="${item.title || 'document.pdf'}" style="display: inline-block; margin-top: 12px; padding: 10px 24px; background: #1a1a1a; color: white; border-radius: 8px; text-decoration: none; font-size: 0.9rem;">📥 Скачать PDF</a>
              `;
              projGallery.appendChild(pdfContainer);
            }

            if (item.type === 'carousel') {
              const carouselContainer = document.createElement('div');
              carouselContainer.style.cssText = 'background: #f8f8fa; border-radius: 12px; padding: 20px; border: 1px solid #e8e8ec;';
              carouselContainer.innerHTML = `
                <div style="font-size: 1.1rem; font-weight: 500; margin-bottom: 15px; color: #1a1a1a;">${item.title || 'Галерея'}</div>
                <div class="carousel-container" style="position: relative; overflow: hidden; border-radius: 8px;">
                  <div class="carousel-track" style="display: flex; transition: transform 0.5s ease; will-change: transform;">
                    ${item.images.map((src, idx) => `
                      <div class="carousel-slide" style="min-width: 100%; flex-shrink: 0;">
                        <img src="${src}" alt="Слайд ${idx + 1}" style="width: 100%; height: auto; max-height: 500px; object-fit: contain; border-radius: 8px; background: white;">
                      </div>
                    `).join('')}
                  </div>
                  <button class="carousel-prev" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.6); color: white; border: none; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; font-size: 20px; z-index: 10; transition: background 0.2s;">‹</button>
                  <button class="carousel-next" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.6); color: white; border: none; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; font-size: 20px; z-index: 10; transition: background 0.2s;">›</button>
                  <div class="carousel-dots" style="position: absolute; bottom: 15px; left: 50%; transform: translateX(-50%); display: flex; gap: 8px; z-index: 10;"></div>
                </div>
              `;
              projGallery.appendChild(carouselContainer);
              
              // Инициализируем карусель
              setTimeout(() => {
                const containerEl = carouselContainer.querySelector('.carousel-container');
                if (!containerEl) return;
                
                const track = containerEl.querySelector('.carousel-track');
                const slides = containerEl.querySelectorAll('.carousel-slide');
                const prevBtn = containerEl.querySelector('.carousel-prev');
                const nextBtn = containerEl.querySelector('.carousel-next');
                const dotsContainer = containerEl.querySelector('.carousel-dots');
                
                let currentIndex = 0;
                const totalSlides = slides.length;

                slides.forEach((_, idx) => {
                  const dot = document.createElement('span');
                  dot.className = 'carousel-dot';
                  dot.style.cssText = `
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: ${idx === 0 ? 'white' : 'rgba(255,255,255,0.4)'};
                    cursor: pointer;
                    transition: background 0.3s;
                    border: none;
                  `;
                  dot.addEventListener('click', () => goToSlide(idx));
                  dotsContainer.appendChild(dot);
                });

                function goToSlide(index) {
                  currentIndex = index;
                  track.style.transform = `translateX(-${currentIndex * 100}%)`;
                  
                  dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, idx) => {
                    dot.style.background = idx === currentIndex ? 'white' : 'rgba(255,255,255,0.4)';
                  });
                }

                prevBtn.addEventListener('click', () => {
                  goToSlide((currentIndex - 1 + totalSlides) % totalSlides);
                });

                nextBtn.addEventListener('click', () => {
                  goToSlide((currentIndex + 1) % totalSlides);
                });

                document.addEventListener('keydown', (e) => {
                  if (containerEl.closest('.project-page.active-page')) {
                    if (e.key === 'ArrowLeft') prevBtn.click();
                    if (e.key === 'ArrowRight') nextBtn.click();
                  }
                });

              }, 100);
            }

            if (item.type === 'link') {
              const link = document.createElement('a');
              link.href = item.url || '#';
              link.target = '_blank';
              link.style.cssText = 'display: block; width: 280px; padding: 28px 20px; background: white; border-radius: 20px; box-shadow: 0 8px 24px rgba(0,0,0,0.06); border: 1px solid rgba(0,0,0,0.03); text-decoration: none; color: #1e293b; transition: all 0.25s ease; text-align: center; flex-shrink: 0;';
              link.addEventListener('mouseenter', () => {
                link.style.transform = 'translateY(-6px)';
                link.style.boxShadow = '0 16px 40px rgba(0,0,0,0.10)';
              });
              link.addEventListener('mouseleave', () => {
                link.style.transform = 'translateY(0)';
                link.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)';
              });
              link.innerHTML = `
                <div style="font-size: 40px; line-height: 1.2; margin-bottom: 10px;">${item.icon || '🔗'}</div>
                <div style="font-weight: 600; font-size: 20px; letter-spacing: -0.2px;">${item.title || 'Ссылка'}</div>
                <div style="font-size: 14px; color: #64748b; margin-top: 6px;">${item.description || ''}</div>
              `;
              linksContainer.appendChild(link);
            }
          });
        }

        if (linksContainer.children.length > 0) {
          projGallery.appendChild(linksContainer);
        }

        page.appendChild(projGallery);
      }

      pagesContainer.appendChild(page);
    });
  }

  // ---------- ПОКАЗ СЕКЦИИ ----------
  function showSection(projectIndex, sectionIndex) {
    const project = projects[projectIndex];
    const section = project.sections[sectionIndex];
    
    if (!section) return;

    let sectionPage = document.getElementById(`section-${projectIndex}-${sectionIndex}`);
    
    if (!sectionPage) {
      sectionPage = document.createElement('div');
      sectionPage.id = `section-${projectIndex}-${sectionIndex}`;
      sectionPage.className = 'project-page hidden-page';
      
      const backBar = document.createElement('div');
      backBar.className = 'back-bar';
      const backBtn = document.createElement('button');
      backBtn.className = 'back-btn';
      backBtn.innerHTML = '<span>← back to project</span>';
      backBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showProject(projectIndex);
      });
      backBar.appendChild(backBtn);
      sectionPage.appendChild(backBar);

      if (section.banner) {
        const bannerDiv = document.createElement('div');
        bannerDiv.className = 'project-banner';
        bannerDiv.innerHTML = `
          <img src="${section.banner}" alt="${section.title || 'Баннер секции'}" style="width: 100%; height: 100%; object-fit: cover;">
        `;
        sectionPage.appendChild(bannerDiv);
      }

      const sectionTitle = document.createElement('h2');
      sectionTitle.className = 'project-title';
      sectionTitle.textContent = section.title || project.title + ' — все работы';
      sectionPage.appendChild(sectionTitle);

      const sectionContent = document.createElement('div');
      sectionContent.className = 'project-gallery';
      sectionContent.style.cssText = 'display: flex; flex-direction: column; gap: 2rem;';

      section.items.forEach(item => {
        const renderedItem = renderSectionItem(item);
        sectionContent.appendChild(renderedItem);
      });

      sectionPage.appendChild(sectionContent);
      pagesContainer.appendChild(sectionPage);
    }

    document.querySelectorAll('.project-page').forEach(p => {
      p.classList.add('hidden-page');
      p.classList.remove('active-page');
    });
    document.getElementById('page-main').classList.add('hidden-page');
    document.getElementById('page-main').classList.remove('active-page');

    sectionPage.classList.remove('hidden-page');
    sectionPage.classList.add('active-page');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ---------- НАВИГАЦИЯ ----------
  function showMain() {
    document.getElementById('page-main').classList.add('active-page');
    document.getElementById('page-main').classList.remove('hidden-page');
    document.querySelectorAll('.project-page').forEach(p => {
      p.classList.add('hidden-page');
      p.classList.remove('active-page');
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showProject(index) {
    document.getElementById('page-main').classList.remove('active-page');
    document.getElementById('page-main').classList.add('hidden-page');
    document.querySelectorAll('.project-page').forEach(p => {
      p.classList.add('hidden-page');
      p.classList.remove('active-page');
    });
    const target = document.getElementById(`project-${index}`);
    if (target) {
      target.classList.remove('hidden-page');
      target.classList.add('active-page');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ---------- ИНИЦИАЛИЗАЦИЯ ----------
  renderGallery();
  renderProjectPages();

  document.querySelectorAll('.project-page').forEach(p => {
    p.classList.add('hidden-page');
    p.classList.remove('active-page');
  });
  document.getElementById('page-main').classList.add('active-page');
  document.getElementById('page-main').classList.remove('hidden-page');

  window.addEventListener('popstate', (e) => {
    if (document.querySelector('.project-page.active-page')) {
      showMain();
    }
  });

  console.log('Портфолио загружено. Проектов: ' + projects.length);

    // ========== POPUP ==========
  const contactPopup = document.getElementById('contact-popup');
  const aboutPopup = document.getElementById('about-popup');
  const closeContact = document.getElementById('close-contact');
  const closeAbout = document.getElementById('close-about');

  // Находим ссылки в шапке
  const navLinks = document.querySelectorAll('.main-header nav a');
  
  // Первая ссылка — "Обо мне", вторая — "Контакты"
  if (navLinks.length >= 2) {
    navLinks[0].addEventListener('click', (e) => {
      e.preventDefault();
      aboutPopup.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    navLinks[1].addEventListener('click', (e) => {
      e.preventDefault();
      contactPopup.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  // Закрытие по крестику
  closeContact.addEventListener('click', () => {
    contactPopup.classList.remove('active');
    document.body.style.overflow = '';
  });

  closeAbout.addEventListener('click', () => {
    aboutPopup.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Закрытие по клику на фон
  contactPopup.addEventListener('click', (e) => {
    if (e.target === contactPopup) {
      contactPopup.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  aboutPopup.addEventListener('click', (e) => {
    if (e.target === aboutPopup) {
      aboutPopup.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Закрытие по ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (contactPopup.classList.contains('active')) {
        contactPopup.classList.remove('active');
        document.body.style.overflow = '';
      }
      if (aboutPopup.classList.contains('active')) {
        aboutPopup.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });
})();