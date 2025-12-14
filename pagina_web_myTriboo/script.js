// MyTriboo JavaScript - Accessibility, Interactions and Filtering

// Translations
const translations = {
  es: {
    nav_home: "Inicio",
    nav_events: "Eventos",
    nav_posts: "Publicaciones",
    nav_chats: "Chats",
    nav_profile: "Perfil",
    accessibility_title: "Accesibilidad",
    theme_label: "Tema",
    theme_light: "☀️ Claro",
    theme_dark: "🌙 Oscuro",
    language_label: "Idioma",
    btn_join: "Únete ahora",
    btn_create_event: "Crear evento",
    btn_create_post: "Crear publicación",
    btn_new_chat: "Nuevo chat",
    btn_logout: "Cerrar sesión",
    hero_title_1: "Encuentra tu",
    hero_title_2: " triboo",
    hero_title_3: "a través de tus",
    hero_title_4: "intereses",
    hero_description:
      "Conecta con personas que comparten tus pasiones. Asiste a eventos temáticos, comparte experiencias y construye relaciones auténticas.",
    btn_get_started: "Comenzar gratis",
    btn_learn_more: "Saber más",
    stats_users: "Usuarios activos",
    stats_events: "Eventos creados",
    stats_categories: "Categorías",
    features_title: "Todo lo que necesitas",
    features_subtitle: "Descubre las herramientas para conectar con tu comunidad",
    feature_events_title: "Eventos Temáticos",
    feature_events_desc:
      "Crea y asiste a eventos organizados según tus intereses. Desde ciencia hasta deportes, encuentra el lugar perfecto para ti.",
    feature_connections_title: "Conexiones Auténticas",
    feature_connections_desc: "Construye tu red de contactos con personas afines. Sistema de conexiones inteligente.",
    feature_posts_title: "Publicaciones",
    feature_posts_desc: "Comparte reflexiones y experiencias. Dale like a las publicaciones que te gusten.",
    feature_feed_title: "Tablones Personalizados",
    feature_feed_desc: "Descubre eventos y publicaciones relacionados con tus intereses.",
    feature_messaging_title: "Mensajería Completa",
    feature_messaging_desc: "Chats privados y grupales para comunicarte con tu triboo.",
    feature_interests_title: "Múltiples Intereses",
    feature_interests_desc: "Selecciona tus intereses: Ciencia, Deportes, Música y más.",
    how_title: "¿Cómo funciona?",
    how_subtitle: "Únete a tu triboo en 3 simples pasos",
    step1_title: "Crea tu perfil",
    step1_desc: "Regístrate y selecciona tus intereses. Personaliza tu experiencia.",
    step2_title: "Descubre y conecta",
    step2_desc: "Explora eventos y publicaciones. Conecta con personas afines.",
    step3_title: "Participa y crece",
    step3_desc: "Asiste a eventos y construye tu red social auténtica.",
    cta_title: "¿Listo para encontrar tu triboo?",
    cta_description: "Únete a miles de personas que ya están conectando a través de sus pasiones compartidas.",
    btn_join_now: "Únete gratis ahora",
    footer_product: "Producto",
    footer_company: "Compañía",
    footer_about: "Acerca de",
    footer_contact: "Contacto",
    footer_privacy: "Privacidad",
    footer_social: "Social",
    footer_rights: "Todos los derechos reservados.",
    events_title: "Tablón de Eventos",
    events_subtitle: "Tu próxima gran experiencia te está esperando. ¿A cuál te apuntas hoy?",
    filter_all: "Todos",
    btn_view_details: "Ver detalles",
    btn_sign_up: "Apuntarse",
    posts_title: "Tablón de Publicaciones",
    posts_subtitle: "Lee, comenta y conecta con las experiencias de los demás.",
    chats_title: "Chats",
    chats_subtitle: "Mantén el contacto con tu triboo, ya sea en grupo o uno a uno.",
    tab_profile: "Perfil",
    tab_my_events: "Mis eventos",
    tab_my_posts: "Mis publicaciones",
    tab_my_connections: "Mis conexiones",
    profile_edit: "Editar perfil",
    label_name: "Nombre completo",
    label_email: "Correo electrónico",
    label_bio: "Biografía",
    label_location: "Ubicación",
    label_interests: "Intereses",
    btn_save_changes: "Guardar cambios",
    my_events_title: "Gestiona tus eventos",
    btn_create_new_event: "Crear nuevo evento",
    btn_edit: "Editar",
    btn_delete: "Eliminar",
    no_more_events: "Sin más eventos",
    create_first_event: "Crea tu primer evento para tu triboo",
    my_posts_title: "Gestiona tus publicaciones",
    btn_create_new_post: "Crear nueva publicación",
    no_more_posts: "Sin más publicaciones",
    share_thoughts: "Comparte tus pensamientos con tu triboo",
    filter_all_events: "Todos",
    filter_created_by_me: "Creados por mí",
    filter_attending: "Asistiré",
    btn_cancel_attendance: "Cancelar asistencia",
    my_connections_title: "Mis conexiones",
    connections_active: "Conexiones",
    connections_pending: "Pendientes",
    connections_blocked: "Bloqueados",
    btn_chat: "Chat",
    btn_unfollow: "Dejar de seguir",
    btn_cancel_request: "Cancelar solicitud",
    btn_unblock: "Desbloquear",
    // Profile stats
    profile_stats_events: " eventos",
    profile_stats_connections: " conexiones",
    profile_stats_posts: " publicaciones",
    profile_member_since: "Miembro desde",
    profile_you: "Tú",
    profile_post_content: "Mi experiencia en el último workshop de física cuántica fue increíble. Aprendí conceptos fascinantes sobre entrelazamiento cuántico.",
    profile_post1_content: "Mi experiencia en el último workshop de física cuántica fue increíble. Aprendí conceptos fascinantes sobre entrelazamiento cuántico.",
    profile_post1_time: "3d",
    profile_post2_content: "Acabo de terminar mi proyecto de domótica casera. Ahora puedo controlar las luces y la temperatura desde el móvil. ¡La tecnología es increíble! 🏠💡",
    profile_post2_time: "1sem",
    btn_add: "+ Agregar",
    // Placeholders
    placeholder_name: "Tu nombre",
    placeholder_email: "tu@email.com",
    placeholder_bio: "Cuéntanos sobre ti...",
    placeholder_location: "Ciudad, País",
    profile_bio_content: "Apasionado de la ciencia y la tecnología. Me encanta conectar con personas que comparten mis intereses.",
    // Categories
    category_science: "🔬 Ciencia",
    category_sports: "⚽ Deportes",
    category_music: "🎵 Música",
    category_tech: "💻 Tecnología",
    category_literature: "📚 Literatura",
    category_art: "🎨 Arte",
    category_cinema: "🎬 Cine",
    // Footer description
    footer_description: "Conecta con tu triboo a través de tus intereses compartidos.",
    // Events content
    event1_title: "Conferencia de Astronomía 2024",
    event1_date: "15 de Marzo",
    event1_location: "Madrid",
    event1_attendees: "45 asistentes",
    event1_description: "Explora los últimos descubrimientos del universo con expertos internacionales. Telescopios en vivo y charlas fascinantes.",
    event2_title: "Partido amistoso de fútbol",
    event2_date: "18 de Marzo",
    event2_location: "Barcelona",
    event2_attendees: "22 asistentes",
    event2_description: "Únete a nuestro partido semanal. Todos los niveles son bienvenidos. Trae tu mejor actitud y ganas de divertirte.",
    event3_title: "Noche de Jazz en Vivo",
    event3_date: "20 de Marzo",
    event3_location: "Valencia",
    event3_attendees: "80 asistentes",
    event3_description: "Disfruta de una noche mágica con los mejores músicos de jazz. Ambiente íntimo y bebidas incluidas.",
    event4_title: "Workshop de Inteligencia Artificial",
    event4_date: "22 de Marzo",
    event4_location: "Online",
    event4_attendees: "150 asistentes",
    event4_description: "Aprende los fundamentos de IA y machine learning con expertos de la industria. Incluye ejercicios prácticos.",
    event5_title: "Club de Lectura: Clásicos",
    event5_date: "25 de Marzo",
    event5_location: "Sevilla",
    event5_attendees: "30 asistentes",
    event5_description: "Discusión sobre '1984' de George Orwell. Café y ambiente acogedor para debatir ideas.",
    event6_title: "Proyección de cine clásico",
    event6_date: "28 de Marzo",
    event6_location: "Bilbao",
    event6_attendees: "35 asistentes",
    event6_description: "Disfruta de una proyección especial de clásicos del cine en pantalla grande. Palomitas y debate post-película incluidos.",
    // Posts content
    post1_author: "María González",
    post1_time: "2h",
    post1_content: "¡Increíble experiencia en la conferencia de astronomía! Aprendí mucho sobre agujeros negros y pude usar un telescopio profesional. ¿Alguien más estuvo allí? 🔭✨",
    post2_author: "Carlos Ruiz",
    post2_time: "5h",
    post2_content: "Gran partido esta tarde. Ganamos 5-3 y todos dieron lo mejor. ¿Quién se apunta para el próximo domingo? 🏆",
    post3_author: "Laura Pérez",
    post3_time: "1d",
    post3_content: "La noche de indie fue espectacular. Las tres bandas estuvieron increíbles, especialmente 'Los Ecos'. ¿Alguien conoce su próximo concierto? 🎸🎤",
    post4_author: "Javier Moreno",
    post4_time: "1d",
    post4_content: "El workshop de IA fue muy práctico. Implementamos una red neuronal desde cero. Ahora toca seguir aprendiendo por mi cuenta. ¿Alguien recomienda recursos? 🤖💡",
    post5_author: "Ana Martínez",
    post5_time: "2d",
    post5_content: "Terminé de releer '1984' para el club de lectura. Cada vez encuentro nuevas capas de significado. ¿Qué opinan sobre el final? El próximo libro será 'Un mundo feliz' 📖",
    post6_author: "Pedro Sánchez",
    post6_time: "3d",
    post6_content: "¡Qué maravilla la proyección de 'Casablanca' ayer! Ver clásicos en pantalla grande es otra experiencia. El debate posterior fue muy enriquecedor. ¿Quién viene a la próxima? 🎬🍿",
    likes_count: "likes",
    comments_count: "comentarios",
    share_text: "Compartir",
    // Profile placeholder texts
    profile_name_placeholder: "Tu nombre completo",
    profile_email_placeholder: "tu@email.com",
    profile_bio_placeholder: "Escribe algo sobre ti...",
    profile_location_placeholder: "Tu ciudad",
    profile_interests_placeholder: "Ciencia, Tecnología, Literatura",
    placeholder_search_users: "Buscar usuarios...",
    // Profile events
    profile_event1_title: "Festival de Jazz en Vivo",
    profile_event1_date: "10 de Febrero",
    profile_event1_attendees: "120 asistentes",
    profile_event1_description: "Noche de jazz con artistas internacionales en un ambiente único.",
    profile_event2_title: "Conferencia de Astronomía 2024",
    profile_event2_date: "15 de Marzo",
    profile_event2_attendees: "45 asistentes",
    profile_event2_description: "Tu evento sobre astronomía y exploración espacial.",
    attending_badge: "✓ Asistiré",
    created_by_you_badge: "★ Creado por ti",
    // Connections
    friends_since: "Amigos desde",
    connection1_date: "Mayo 2024",
    connection2_date: "Enero 2025",
    // Chats
    chat1_name: "María González",
    chat1_preview: "¡Gracias por venir al evento! 🔬",
    chat1_time: "10:30",
    chat2_name: "Grupo: Fútbol Barcelona ⚽",
    chat2_preview: "Carlos: Nos vemos el domingo a las 10",
    chat2_time: "Ayer",
    chat3_name: "Laura Pérez",
    chat3_preview: "Te paso el enlace de la banda 🎵",
    chat3_time: "Ayer",
    chat4_name: "Grupo: Workshop IA 💻",
    chat4_preview: "Ana compartió un documento",
    chat4_time: "2d",
    chat5_name: "Javier Moreno",
    chat5_preview: "Oye, ¿tienes el código del proyecto?",
    chat5_time: "3d",
    chat6_name: "Grupo: Club de Lectura 📚",
    chat6_preview: "Pedro: ¿Qué os pareció el final?",
    chat6_time: "4d",
    chat7_name: "Sofía Ramírez",
    chat7_preview: "Perfecto, nos vemos allí 👍",
    chat7_time: "5d",
    chat8_name: "Grupo: Cine Clásico 🎬",
    chat8_preview: "Luis envió una foto",
    chat8_time: "1sem",
    chat9_name: "Miguel Torres",
    chat9_preview: "¡Muchas gracias por la recomendación!",
    chat9_time: "1sem",
    chat10_name: "Elena Díaz",
    chat10_preview: "Nos conectamos pronto 😊",
    chat10_time: "2sem",
  },
  en: {
    nav_home: "Home",
    nav_events: "Events",
    nav_posts: "Posts",
    nav_chats: "Chats",
    nav_profile: "Profile",
    accessibility_title: "Accessibility",
    theme_label: "Theme",
    theme_light: "☀️ Light",
    theme_dark: "🌙 Dark",
    language_label: "Language",
    btn_join: "Join now",
    btn_create_event: "Create event",
    btn_create_post: "Create post",
    btn_new_chat: "New chat",
    btn_logout: "Log out",
    hero_title_1: "Find your",
    hero_title_2: " triboo",
    hero_title_3: "through your",
    hero_title_4: "interests",
    hero_description:
      "Connect with people who share your passions. Attend themed events, share experiences and build authentic relationships.",
    btn_get_started: "Get started free",
    btn_learn_more: "Learn more",
    stats_users: "Active users",
    stats_events: "Events created",
    stats_categories: "Categories",
    features_title: "Everything you need",
    features_subtitle: "Discover the tools to connect with your community",
    feature_events_title: "Themed Events",
    feature_events_desc:
      "Create and attend events organized by your interests. From science to sports, find your perfect place.",
    feature_connections_title: "Authentic Connections",
    feature_connections_desc: "Build your network with like-minded people. Smart connection system.",
    feature_posts_title: "Posts",
    feature_posts_desc: "Share thoughts and experiences. Like posts you enjoy.",
    feature_feed_title: "Personalized Boards",
    feature_feed_desc: "Discover events and posts related to your interests.",
    feature_messaging_title: "Complete Messaging",
    feature_messaging_desc: "Private and group chats to communicate with your triboo.",
    feature_interests_title: "Multiple Interests",
    feature_interests_desc: "Select your interests: Science, Sports, Music and more.",
    how_title: "How it works?",
    how_subtitle: "Join your triboo in 3 simple steps",
    step1_title: "Create your profile",
    step1_desc: "Sign up and select your interests. Customize your experience.",
    step2_title: "Discover and connect",
    step2_desc: "Explore events and posts. Connect with like-minded people.",
    step3_title: "Participate and grow",
    step3_desc: "Attend events and build your authentic social network.",
    cta_title: "Ready to find your triboo?",
    cta_description: "Join thousands of people already connecting through their shared passions.",
    btn_join_now: "Join free now",
    footer_product: "Product",
    footer_company: "Company",
    footer_about: "About",
    footer_contact: "Contact",
    footer_privacy: "Privacy",
    footer_social: "Social",
    footer_rights: "All rights reserved.",
    events_title: "Events Board",
    events_subtitle: "Your next great experience is waiting. Which one will you join today?",
    filter_all: "All",
    btn_view_details: "View details",
    btn_sign_up: "Sign up",
    posts_title: "Posts Board",
    posts_subtitle: "Read, comment and connect with the experiences of others.",
    chats_title: "Chats",
    chats_subtitle: "Stay in touch with your tribe, whether in groups or one-on-one.",
    tab_profile: "Profile",
    tab_my_events: "My events",
    tab_my_posts: "My posts",
    tab_my_connections: "My connections",
    profile_edit: "Edit profile",
    label_name: "Full name",
    label_email: "Email",
    label_bio: "Biography",
    label_location: "Location",
    label_interests: "Interests",
    btn_save_changes: "Save changes",
    my_events_title: "Manage your events",
    btn_create_new_event: "Create new event",
    btn_edit: "Edit",
    btn_delete: "Delete",
    no_more_events: "No more events",
    create_first_event: "Create your first event for your triboo",
    my_posts_title: "Manage your posts",
    btn_create_new_post: "Create new post",
    no_more_posts: "No more posts",
    share_thoughts: "Share your thoughts with your triboo",
    filter_all_events: "All",
    filter_created_by_me: "Created by me",
    filter_attending: "Attending",
    btn_cancel_attendance: "Cancel attendance",
    my_connections_title: "My connections",
    connections_active: "Connections",
    connections_pending: "Pending",
    connections_blocked: "Blocked",
    btn_chat: "Chat",
    btn_unfollow: "Unfollow",
    btn_cancel_request: "Cancel request",
    btn_unblock: "Unblock",
    // Profile stats
    profile_stats_events: " events",
    profile_stats_connections: " connections",
    profile_stats_posts: " posts",
    profile_member_since: "Member since",
    profile_you: "You",
    profile_post_content: "My experience at the last quantum physics workshop was incredible. I learned fascinating concepts about quantum entanglement.",
    profile_post1_content: "My experience at the last quantum physics workshop was incredible. I learned fascinating concepts about quantum entanglement.",
    profile_post1_time: "3d",
    profile_post2_content: "Just finished my home automation project. Now I can control the lights and temperature from my phone. Technology is amazing! 🏠💡",
    profile_post2_time: "1w",
    btn_add: "+ Add",
    // Placeholders
    placeholder_name: "Your name",
    placeholder_email: "your@email.com",
    placeholder_bio: "Tell us about yourself...",
    placeholder_location: "City, Country",
    profile_bio_content: "Passionate about science and technology. I love connecting with people who share my interests.",
    // Categories
    category_science: "🔬 Science",
    category_sports: "⚽ Sports",
    category_music: "🎵 Music",
    category_tech: "💻 Technology",
    category_literature: "📚 Literature",
    category_art: "🎨 Art",
    category_cinema: "🎬 Cinema",
    // Footer description
    footer_description: "Connect with your triboo through your shared interests.",
    // Events content
    event1_title: "Astronomy Conference 2024",
    event1_date: "March 15",
    event1_location: "Madrid",
    event1_attendees: "45 attendees",
    event1_description: "Explore the latest discoveries of the universe with international experts. Live telescopes and fascinating talks.",
    event2_title: "Friendly Soccer Match",
    event2_date: "March 18",
    event2_location: "Barcelona",
    event2_attendees: "22 attendees",
    event2_description: "Join our weekly match. All levels welcome. Bring your best attitude and desire to have fun.",
    event3_title: "Live Jazz Night",
    event3_date: "March 20",
    event3_location: "Valencia",
    event3_attendees: "80 attendees",
    event3_description: "Enjoy a magical night with the best jazz musicians. Intimate atmosphere and drinks included.",
    event4_title: "Artificial Intelligence Workshop",
    event4_date: "March 22",
    event4_location: "Online",
    event4_attendees: "150 attendees",
    event4_description: "Learn the fundamentals of AI and machine learning with industry experts. Includes practical exercises.",
    event5_title: "Book Club: Classics",
    event5_date: "March 25",
    event5_location: "Seville",
    event5_attendees: "30 attendees",
    event5_description: "Discussion about '1984' by George Orwell. Coffee and cozy atmosphere to debate ideas.",
    event6_title: "Classic Cinema Screening",
    event6_date: "March 28",
    event6_location: "Bilbao",
    event6_attendees: "35 attendees",
    event6_description: "Enjoy a special screening of cinema classics on the big screen. Popcorn and post-movie discussion included.",
    // Posts content
    post1_author: "María González",
    post1_time: "2h",
    post1_content: "Incredible experience at the astronomy conference! I learned a lot about black holes and got to use a professional telescope. Was anyone else there? 🔭✨",
    post2_author: "Carlos Ruiz",
    post2_time: "5h",
    post2_content: "Great match this afternoon. We won 5-3 and everyone gave their best. Who's joining next Sunday? 🏆",
    post3_author: "Laura Pérez",
    post3_time: "1d",
    post3_content: "The indie night was spectacular. All three bands were amazing, especially 'Los Ecos'. Does anyone know their next concert? 🎸🎤",
    post4_author: "Javier Moreno",
    post4_time: "1d",
    post4_content: "The AI workshop was very practical. We implemented a neural network from scratch. Now it's time to keep learning on my own. Any resource recommendations? 🤖💡",
    post5_author: "Ana Martínez",
    post5_time: "2d",
    post5_content: "Finished rereading '1984' for the book club. I find new layers of meaning every time. What do you think about the ending? Next book will be 'Brave New World' 📖",
    post6_author: "Pedro Sánchez",
    post6_time: "3d",
    post6_content: "What a wonderful screening of 'Casablanca' yesterday! Watching classics on the big screen is a different experience. The discussion afterwards was very enriching. Who's coming to the next one? 🎬🍿",
    likes_count: "likes",
    comments_count: "comments",
    share_text: "Share",
    // Profile placeholder texts
    profile_name_placeholder: "Your full name",
    profile_email_placeholder: "your@email.com",
    profile_bio_placeholder: "Write something about yourself...",
    profile_location_placeholder: "Your city",
    profile_interests_placeholder: "Science, Technology, Literature",
    placeholder_search_users: "Search users...",
    // Profile events
    profile_event1_title: "Live Jazz Festival",
    profile_event1_date: "February 10",
    profile_event1_attendees: "120 attendees",
    profile_event1_description: "Jazz night with international artists in a unique atmosphere.",
    profile_event2_title: "Astronomy Conference 2024",
    profile_event2_date: "March 15",
    profile_event2_attendees: "45 attendees",
    profile_event2_description: "Your event about astronomy and space exploration.",
    attending_badge: "✓ Attending",
    created_by_you_badge: "★ Created by you",
    // Connections
    friends_since: "Friends since",
    connection1_date: "May 2024",
    connection2_date: "January 2025",
    // Chats
    chat1_name: "María González",
    chat1_preview: "Thanks for coming to the event! 🔬",
    chat1_time: "10:30",
    chat2_name: "Group: Barcelona Football ⚽",
    chat2_preview: "Carlos: See you Sunday at 10",
    chat2_time: "Yesterday",
    chat3_name: "Laura Pérez",
    chat3_preview: "I'll send you the band's link 🎵",
    chat3_time: "Yesterday",
    chat4_name: "Group: AI Workshop 💻",
    chat4_preview: "Ana shared a document",
    chat4_time: "2d",
    chat5_name: "Javier Moreno",
    chat5_preview: "Hey, do you have the project code?",
    chat5_time: "3d",
    chat6_name: "Group: Book Club 📚",
    chat6_preview: "Pedro: What did you think of the ending?",
    chat6_time: "4d",
    chat7_name: "Sofía Ramírez",
    chat7_preview: "Perfect, see you there 👍",
    chat7_time: "5d",
    chat8_name: "Group: Classic Cinema 🎬",
    chat8_preview: "Luis sent a photo",
    chat8_time: "1w",
    chat9_name: "Miguel Torres",
    chat9_preview: "Thanks so much for the recommendation!",
    chat9_time: "1w",
    chat10_name: "Elena Díaz",
    chat10_preview: "Let's connect soon 😊",
    chat10_time: "2w",
  },
  fr: {
    nav_home: "Accueil",
    nav_events: "Événements",
    nav_posts: "Publications",
    nav_chats: "Chats",
    nav_profile: "Profil",
    accessibility_title: "Accessibilité",
    theme_label: "Thème",
    theme_light: "☀️ Clair",
    theme_dark: "🌙 Sombre",
    language_label: "Langue",
    btn_join: "Rejoindre",
    btn_create_event: "Créer événement",
    btn_create_post: "Créer publication",
    btn_new_chat: "Nouveau chat",
    btn_logout: "Déconnexion",
    hero_title_1: "Trouvez votre",
    hero_title_2: " triboo",
    hero_title_3: "à travers vos",
    hero_title_4: "intérêts",
    hero_description:
      "Connectez-vous avec des personnes qui partagent vos passions. Assistez à des événements thématiques et construisez des relations authentiques.",
    btn_get_started: "Commencer gratuitement",
    btn_learn_more: "En savoir plus",
    stats_users: "Utilisateurs actifs",
    stats_events: "Événements créés",
    stats_categories: "Catégories",
    features_title: "Tout ce dont vous avez besoin",
    features_subtitle: "Découvrez les outils pour vous connecter avec votre communauté",
    feature_events_title: "Événements Thématiques",
    feature_events_desc: "Créez et assistez à des événements organisés selon vos intérêts. De la science aux sports, trouvez votre place parfaite.",
    feature_connections_title: "Connexions Authentiques",
    feature_connections_desc: "Construisez votre réseau avec des personnes partageant les mêmes idées. Système de connexion intelligent.",
    feature_posts_title: "Publications",
    feature_posts_desc: "Partagez vos pensées et expériences. Aimez les publications qui vous plaisent.",
    feature_feed_title: "Tableaux Personnalisés",
    feature_feed_desc: "Découvrez des événements et publications liés à vos intérêts.",
    feature_messaging_title: "Messagerie Complète",
    feature_messaging_desc: "Chats privés et de groupe pour communiquer avec votre triboo.",
    feature_interests_title: "Intérêts Multiples",
    feature_interests_desc: "Sélectionnez vos intérêts: Science, Sports, Musique et plus encore.",
    how_title: "Comment ça marche?",
    how_subtitle: "Rejoignez votre triboo en 3 étapes simples",
    step1_title: "Créez votre profil",
    step1_desc: "Inscrivez-vous et sélectionnez vos intérêts. Personnalisez votre expérience.",
    step2_title: "Découvrez et connectez",
    step2_desc: "Explorez les événements et publications. Connectez-vous avec des personnes partageant les mêmes idées.",
    step3_title: "Participez et grandissez",
    step3_desc: "Assistez à des événements et construisez votre réseau social authentique.",
    cta_title: "Prêt à trouver votre triboo?",
    cta_description: "Rejoignez des milliers de personnes qui se connectent déjà grâce à leurs passions partagées.",
    btn_join_now: "Rejoignez gratuitement maintenant",
    footer_product: "Produit",
    footer_company: "Entreprise",
    footer_about: "À propos",
    footer_contact: "Contact",
    footer_privacy: "Confidentialité",
    footer_social: "Social",
    footer_rights: "Tous droits réservés.",
    events_title: "Tableau d'Événements",
    events_subtitle: "Votre prochaine grande expérience vous attend. Laquelle allez-vous rejoindre aujourd'hui?",
    filter_all: "Tous",
    btn_view_details: "Voir les détails",
    btn_sign_up: "S'inscrire",
    posts_title: "Tableau de Publications",
    posts_subtitle: "Lisez, commentez et connectez-vous avec les expériences des autres.",
    chats_title: "Chats",
    chats_subtitle: "Restez en contact avec votre triboo, que ce soit en groupe ou en tête-à-tête.",
    tab_profile: "Profil",
    tab_my_events: "Mes événements",
    tab_my_posts: "Mes publications",
    tab_my_connections: "Mes connexions",
    profile_edit: "Modifier le profil",
    label_name: "Nom complet",
    label_email: "Email",
    label_bio: "Biographie",
    label_location: "Emplacement",
    label_interests: "Intérêts",
    btn_save_changes: "Enregistrer les modifications",
    my_events_title: "Gérez vos événements",
    btn_create_new_event: "Créer un nouvel événement",
    btn_edit: "Modifier",
    btn_delete: "Supprimer",
    no_more_events: "Plus d'événements",
    create_first_event: "Créez votre premier événement pour votre triboo",
    my_posts_title: "Gérez vos publications",
    btn_create_new_post: "Créer une nouvelle publication",
    no_more_posts: "Plus de publications",
    share_thoughts: "Partagez vos pensées avec votre triboo",
    filter_all_events: "Tous",
    filter_created_by_me: "Créés par moi",
    filter_attending: "Je participe",
    btn_cancel_attendance: "Annuler la participation",
    my_connections_title: "Mes connexions",
    connections_active: "Connexions",
    connections_pending: "En attente",
    connections_blocked: "Bloqués",
    btn_chat: "Chat",
    btn_unfollow: "Ne plus suivre",
    btn_cancel_request: "Annuler la demande",
    btn_unblock: "Débloquer",
    // Profile stats
    profile_stats_events: " événements",
    profile_stats_connections: " connexions",
    profile_stats_posts: " publications",
    profile_member_since: "Membre depuis",
    profile_you: "Vous",
    profile_post_content: "Mon expérience au dernier atelier de physique quantique était incroyable. J'ai appris des concepts fascinants sur l'intrication quantique.",
    profile_post1_content: "Mon expérience au dernier atelier de physique quantique était incroyable. J'ai appris des concepts fascinants sur l'intrication quantique.",
    profile_post1_time: "3j",
    profile_post2_content: "Je viens de terminer mon projet de domotique. Maintenant je peux contrôler les lumières et la température depuis mon téléphone. La technologie est incroyable! 🏠💡",
    profile_post2_time: "1sem",
    btn_add: "+ Ajouter",
    // Placeholders
    placeholder_name: "Votre nom",
    placeholder_email: "votre@email.com",
    placeholder_bio: "Parlez-nous de vous...",
    placeholder_location: "Ville, Pays",
    profile_bio_content: "Passionné par la science et la technologie. J'adore me connecter avec des personnes qui partagent mes intérêts.",
    // Categories
    category_science: "🔬 Science",
    category_sports: "⚽ Sports",
    category_music: "🎵 Musique",
    category_tech: "💻 Technologie",
    category_literature: "📚 Littérature",
    category_art: "🎨 Art",
    category_cinema: "🎬 Cinéma",
    // Footer description
    footer_description: "Connectez-vous avec votre triboo à travers vos intérêts partagés.",
    // Events content
    event1_title: "Conférence d'Astronomie 2024",
    event1_date: "15 Mars",
    event1_location: "Madrid",
    event1_attendees: "45 participants",
    event1_description: "Explorez les dernières découvertes de l'univers avec des experts internationaux. Télescopes en direct et discussions fascinantes.",
    event2_title: "Match de Football Amical",
    event2_date: "18 Mars",
    event2_location: "Barcelone",
    event2_attendees: "22 participants",
    event2_description: "Rejoignez notre match hebdomadaire. Tous les niveaux sont les bienvenus. Apportez votre meilleure attitude et envie de vous amuser.",
    event3_title: "Soirée Jazz en Direct",
    event3_date: "20 Mars",
    event3_location: "Valence",
    event3_attendees: "80 participants",
    event3_description: "Profitez d'une soirée magique avec les meilleurs musiciens de jazz. Ambiance intime et boissons incluses.",
    event4_title: "Atelier Intelligence Artificielle",
    event4_date: "22 Mars",
    event4_location: "En ligne",
    event4_attendees: "150 participants",
    event4_description: "Apprenez les fondamentaux de l'IA et du machine learning avec des experts de l'industrie. Exercices pratiques inclus.",
    event5_title: "Club de Lecture: Classiques",
    event5_date: "25 Mars",
    event5_location: "Séville",
    event5_attendees: "30 participants",
    event5_description: "Discussion sur '1984' de George Orwell. Café et atmosphère chaleureuse pour débattre d'idées.",
    event6_title: "Projection de cinéma classique",
    event6_date: "28 Mars",
    event6_location: "Bilbao",
    event6_attendees: "35 participants",
    event6_description: "Profitez d'une projection spéciale de classiques du cinéma sur grand écran. Pop-corn et débat après le film inclus.",
    // Posts content
    post1_author: "María González",
    post1_time: "2h",
    post1_content: "Expérience incroyable à la conférence d'astronomie! J'ai beaucoup appris sur les trous noirs et j'ai pu utiliser un télescope professionnel. Quelqu'un d'autre y était? 🔭✨",
    post2_author: "Carlos Ruiz",
    post2_time: "5h",
    post2_content: "Super match cet après-midi. Nous avons gagné 5-3 et tout le monde a donné le meilleur. Qui vient dimanche prochain? 🏆",
    post3_author: "Laura Pérez",
    post3_time: "1j",
    post3_content: "La soirée indie était spectaculaire. Les trois groupes étaient incroyables, surtout 'Los Ecos'. Quelqu'un connaît leur prochain concert? 🎸🎤",
    post4_author: "Javier Moreno",
    post4_time: "1j",
    post4_content: "L'atelier IA était très pratique. Nous avons implémenté un réseau neuronal à partir de zéro. Maintenant, il faut continuer à apprendre par moi-même. Des recommandations de ressources? 🤖💡",
    post5_author: "Ana Martínez",
    post5_time: "2j",
    post5_content: "J'ai fini de relire '1984' pour le club de lecture. Je trouve de nouvelles couches de sens à chaque fois. Que pensez-vous de la fin? Le prochain livre sera 'Le Meilleur des mondes' 📖",
    post6_author: "Pedro Sánchez",
    post6_time: "3j",
    post6_content: "Quelle merveille la projection de 'Casablanca' hier! Voir des classiques sur grand écran est une autre expérience. Le débat qui a suivi était très enrichissant. Qui vient à la prochaine? 🎬🍿",
    likes_count: "j'aime",
    comments_count: "commentaires",
    share_text: "Partager",
    // Profile placeholder texts
    profile_name_placeholder: "Votre nom complet",
    profile_email_placeholder: "votre@email.com",
    profile_bio_placeholder: "Écrivez quelque chose sur vous...",
    profile_location_placeholder: "Votre ville",
    profile_interests_placeholder: "Science, Technologie, Littérature",
    placeholder_search_users: "Rechercher des utilisateurs...",
    // Profile events
    profile_event1_title: "Festival de Jazz en Direct",
    profile_event1_date: "10 Février",
    profile_event1_attendees: "120 participants",
    profile_event1_description: "Soirée jazz avec des artistes internationaux dans une ambiance unique.",
    profile_event2_title: "Conférence d'Astronomie 2024",
    profile_event2_date: "15 Mars",
    profile_event2_attendees: "45 participants",
    profile_event2_description: "Votre événement sur l'astronomie et l'exploration spatiale.",
    attending_badge: "✓ Je participe",
    created_by_you_badge: "★ Créé par vous",
    // Connections
    friends_since: "Amis depuis",
    connection1_date: "Mai 2024",
    connection2_date: "Janvier 2025",
    // Chats
    chat1_name: "María González",
    chat1_preview: "Merci d'être venu à l'événement! 🔬",
    chat1_time: "10:30",
    chat2_name: "Groupe: Football Barcelone ⚽",
    chat2_preview: "Carlos: On se voit dimanche à 10h",
    chat2_time: "Hier",
    chat3_name: "Laura Pérez",
    chat3_preview: "Je t'envoie le lien du groupe 🎵",
    chat3_time: "Hier",
    chat4_name: "Groupe: Atelier IA 💻",
    chat4_preview: "Ana a partagé un document",
    chat4_time: "2j",
    chat5_name: "Javier Moreno",
    chat5_preview: "Hé, tu as le code du projet?",
    chat5_time: "3j",
    chat6_name: "Groupe: Club de Lecture 📚",
    chat6_preview: "Pedro: Qu'avez-vous pensé de la fin?",
    chat6_time: "4j",
    chat7_name: "Sofía Ramírez",
    chat7_preview: "Parfait, on se voit là-bas 👍",
    chat7_time: "5j",
    chat8_name: "Groupe: Cinéma Classique 🎬",
    chat8_preview: "Luis a envoyé une photo",
    chat8_time: "1sem",
    chat9_name: "Miguel Torres",
    chat9_preview: "Merci beaucoup pour la recommandation!",
    chat9_time: "1sem",
    chat10_name: "Elena Díaz",
    chat10_preview: "On se connecte bientôt 😊",
    chat10_time: "2sem",
  },
  de: {
    nav_home: "Startseite",
    nav_events: "Veranstaltungen",
    nav_posts: "Beiträge",
    nav_chats: "Chats",
    nav_profile: "Profil",
    accessibility_title: "Barrierefreiheit",
    theme_label: "Thema",
    theme_light: "☀️ Hell",
    theme_dark: "🌙 Dunkel",
    language_label: "Sprache",
    btn_join: "Jetzt beitreten",
    btn_create_event: "Ereignis erstellen",
    btn_create_post: "Beitrag erstellen",
    btn_new_chat: "Neuer Chat",
    btn_logout: "Abmelden",
    hero_title_1: "Finde deinen",
    hero_title_2: " triboo",
    hero_title_3: "durch deine",
    hero_title_4: "Interessen",
    hero_description:
      "Verbinde dich mit Menschen, die deine Leidenschaften teilen. Nimm an thematischen Veranstaltungen teil und baue authentische Beziehungen auf.",
    btn_get_started: "Kostenlos starten",
    btn_learn_more: "Mehr erfahren",
    stats_users: "Aktive Benutzer",
    stats_events: "Erstellte Veranstaltungen",
    stats_categories: "Kategorien",
    features_title: "Alles, was Sie brauchen",
    features_subtitle: "Entdecken Sie die Tools, um sich mit Ihrer Community zu verbinden",
    feature_events_title: "Thematische Veranstaltungen",
    feature_events_desc: "Erstellen und besuchen Sie Veranstaltungen nach Ihren Interessen. Von Wissenschaft bis Sport, finden Sie Ihren perfekten Platz.",
    feature_connections_title: "Authentische Verbindungen",
    feature_connections_desc: "Bauen Sie Ihr Netzwerk mit Gleichgesinnten auf. Intelligentes Verbindungssystem.",
    feature_posts_title: "Beiträge",
    feature_posts_desc: "Teilen Sie Gedanken und Erfahrungen. Liken Sie Beiträge, die Ihnen gefallen.",
    feature_feed_title: "Personalisierte Boards",
    feature_feed_desc: "Entdecken Sie Veranstaltungen und Beiträge zu Ihren Interessen.",
    feature_messaging_title: "Vollständige Nachrichtenfunktion",
    feature_messaging_desc: "Private und Gruppenchats, um mit Ihrem triboo zu kommunizieren.",
    feature_interests_title: "Mehrere Interessen",
    feature_interests_desc: "Wählen Sie Ihre Interessen: Wissenschaft, Sport, Musik und mehr.",
    how_title: "Wie funktioniert es?",
    how_subtitle: "Treten Sie Ihrem triboo in 3 einfachen Schritten bei",
    step1_title: "Erstellen Sie Ihr Profil",
    step1_desc: "Registrieren Sie sich und wählen Sie Ihre Interessen. Passen Sie Ihre Erfahrung an.",
    step2_title: "Entdecken und verbinden",
    step2_desc: "Erkunden Sie Veranstaltungen und Beiträge. Verbinden Sie sich mit Gleichgesinnten.",
    step3_title: "Teilnehmen und wachsen",
    step3_desc: "Nehmen Sie an Veranstaltungen teil und bauen Sie Ihr authentisches soziales Netzwerk auf.",
    cta_title: "Bereit, Ihren triboo zu finden?",
    cta_description: "Schließen Sie sich Tausenden von Menschen an, die sich bereits über ihre gemeinsamen Leidenschaften verbinden.",
    btn_join_now: "Jetzt kostenlos beitreten",
    footer_product: "Produkt",
    footer_company: "Unternehmen",
    footer_about: "Über uns",
    footer_contact: "Kontakt",
    footer_privacy: "Datenschutz",
    footer_social: "Soziale Medien",
    footer_rights: "Alle Rechte vorbehalten.",
    events_title: "Veranstaltungs-Board",
    events_subtitle: "Ihr nächstes großes Erlebnis wartet. Welchem werden Sie heute beitreten?",
    filter_all: "Alle",
    btn_view_details: "Details anzeigen",
    btn_sign_up: "Anmelden",
    posts_title: "Beitrags-Board",
    posts_subtitle: "Lesen, kommentieren und mit den Erfahrungen anderer verbinden.",
    chats_title: "Chats",
    chats_subtitle: "Bleiben Sie in Kontakt mit Ihrem triboo, ob in Gruppen oder einzeln.",
    tab_profile: "Profil",
    tab_my_events: "Meine Veranstaltungen",
    tab_my_posts: "Meine Beiträge",
    tab_my_connections: "Meine Verbindungen",
    profile_edit: "Profil bearbeiten",
    label_name: "Vollständiger Name",
    label_email: "E-Mail",
    label_bio: "Biografie",
    label_location: "Standort",
    label_interests: "Interessen",
    btn_save_changes: "Änderungen speichern",
    my_events_title: "Verwalten Sie Ihre Veranstaltungen",
    btn_create_new_event: "Neue Veranstaltung erstellen",
    btn_edit: "Bearbeiten",
    btn_delete: "Löschen",
    no_more_events: "Keine weiteren Veranstaltungen",
    create_first_event: "Erstellen Sie Ihre erste Veranstaltung für Ihren triboo",
    my_posts_title: "Verwalten Sie Ihre Beiträge",
    btn_create_new_post: "Neuen Beitrag erstellen",
    no_more_posts: "Keine weiteren Beiträge",
    share_thoughts: "Teilen Sie Ihre Gedanken mit Ihrem triboo",
    filter_all_events: "Alle",
    filter_created_by_me: "Von mir erstellt",
    filter_attending: "Teilnehmen",
    btn_cancel_attendance: "Teilnahme absagen",
    my_connections_title: "Meine Verbindungen",
    connections_active: "Verbindungen",
    connections_pending: "Ausstehend",
    connections_blocked: "Blockiert",
    btn_chat: "Chat",
    btn_unfollow: "Nicht mehr folgen",
    btn_cancel_request: "Anfrage abbrechen",
    btn_unblock: "Entsperren",
    // Profile stats
    profile_stats_events: " Veranstaltungen",
    profile_stats_connections: " Verbindungen",
    profile_stats_posts: " Beiträge",
    profile_member_since: "Mitglied seit",
    profile_you: "Du",
    profile_post_content: "Meine Erfahrung beim letzten Quantenphysik-Workshop war unglaublich. Ich habe faszinierende Konzepte über Quantenverschränkung gelernt.",
    profile_post1_content: "Meine Erfahrung beim letzten Quantenphysik-Workshop war unglaublich. Ich habe faszinierende Konzepte über Quantenverschränkung gelernt.",
    profile_post1_time: "3T",
    profile_post2_content: "Gerade mein Smart-Home-Projekt abgeschlossen. Jetzt kann ich Lichter und Temperatur vom Handy aus steuern. Technologie ist unglaublich! 🏠💡",
    profile_post2_time: "1Wo",
    btn_add: "+ Hinzufügen",
    // Placeholders
    placeholder_name: "Ihr Name",
    placeholder_email: "ihre@email.com",
    placeholder_bio: "Erzählen Sie uns von sich...",
    placeholder_location: "Stadt, Land",
    profile_bio_content: "Begeistert von Wissenschaft und Technologie. Ich liebe es, mich mit Menschen zu verbinden, die meine Interessen teilen.",
    // Categories
    category_science: "🔬 Wissenschaft",
    category_sports: "⚽ Sport",
    category_music: "🎵 Musik",
    category_tech: "💻 Technologie",
    category_literature: "📚 Literatur",
    category_art: "🎨 Kunst",
    category_cinema: "🎬 Kino",
    // Footer description
    footer_description: "Verbinden Sie sich mit Ihrem triboo durch gemeinsame Interessen.",
    // Events content
    event1_title: "Astronomie-Konferenz 2024",
    event1_date: "15. März",
    event1_location: "Madrid",
    event1_attendees: "45 Teilnehmer",
    event1_description: "Entdecken Sie die neuesten Entdeckungen des Universums mit internationalen Experten. Live-Teleskope und faszinierende Vorträge.",
    event2_title: "Freundschafts-Fußballspiel",
    event2_date: "18. März",
    event2_location: "Barcelona",
    event2_attendees: "22 Teilnehmer",
    event2_description: "Nehmen Sie an unserem wöchentlichen Spiel teil. Alle Niveaus willkommen. Bringen Sie Ihre beste Einstellung und Lust auf Spaß mit.",
    event3_title: "Live-Jazz-Abend",
    event3_date: "20. März",
    event3_location: "Valencia",
    event3_attendees: "80 Teilnehmer",
    event3_description: "Genießen Sie einen magischen Abend mit den besten Jazz-Musikern. Intime Atmosphäre und Getränke inklusive.",
    event4_title: "Künstliche Intelligenz Workshop",
    event4_date: "22. März",
    event4_location: "Online",
    event4_attendees: "150 Teilnehmer",
    event4_description: "Lernen Sie die Grundlagen von KI und Machine Learning mit Branchenexperten. Praktische Übungen inklusive.",
    event5_title: "Buchclub: Klassiker",
    event5_date: "25. März",
    event5_location: "Sevilla",
    event5_attendees: "30 Teilnehmer",
    event5_description: "Diskussion über '1984' von George Orwell. Kaffee und gemütliche Atmosphäre zum Ideenaustausch.",
    event6_title: "Klassische Filmvorführung",
    event6_date: "28. März",
    event6_location: "Bilbao",
    event6_attendees: "35 Teilnehmer",
    event6_description: "Genießen Sie eine besondere Vorführung von Filmklassikern auf großer Leinwand. Popcorn und Diskussion nach dem Film inklusive.",
    // Posts content
    post1_author: "María González",
    post1_time: "2Std",
    post1_content: "Unglaubliche Erfahrung auf der Astronomie-Konferenz! Ich habe viel über schwarze Löcher gelernt und durfte ein professionelles Teleskop benutzen. War noch jemand dort? 🔭✨",
    post2_author: "Carlos Ruiz",
    post2_time: "5Std",
    post2_content: "Tolles Spiel heute Nachmittag. Wir haben 5-3 gewonnen und alle gaben ihr Bestes. Wer kommt nächsten Sonntag mit? 🏆",
    post3_author: "Laura Pérez",
    post3_time: "1T",
    post3_content: "Die Indie-Nacht war spektakulär. Alle drei Bands waren unglaublich, besonders 'Los Ecos'. Kennt jemand ihr nächstes Konzert? 🎸🎤",
    post4_author: "Javier Moreno",
    post4_time: "1T",
    post4_content: "Der KI-Workshop war sehr praktisch. Wir haben ein neuronales Netzwerk von Grund auf implementiert. Jetzt heißt es selbst weiterlernen. Ressourcen-Empfehlungen? 🤖💡",
    post5_author: "Ana Martínez",
    post5_time: "2T",
    post5_content: "Habe '1984' für den Buchclub nochmal gelesen. Ich entdecke jedes Mal neue Bedeutungsebenen. Was denkt ihr über das Ende? Das nächste Buch wird 'Schöne neue Welt' sein 📖",
    post6_author: "Pedro Sánchez",
    post6_time: "3T",
    post6_content: "Was für eine wunderbare Vorführung von 'Casablanca' gestern! Klassiker auf der großen Leinwand zu sehen ist ein anderes Erlebnis. Die anschließende Diskussion war sehr bereichernd. Wer kommt zur nächsten? 🎬🍿",
    likes_count: "Likes",
    comments_count: "Kommentare",
    share_text: "Teilen",
    // Profile placeholder texts
    profile_name_placeholder: "Ihr vollständiger Name",
    profile_email_placeholder: "ihre@email.com",
    profile_bio_placeholder: "Schreiben Sie etwas über sich...",
    profile_location_placeholder: "Ihre Stadt",
    profile_interests_placeholder: "Wissenschaft, Technologie, Literatur",
    placeholder_search_users: "Benutzer suchen...",
    // Profile events
    profile_event1_title: "Live-Jazz-Festival",
    profile_event1_date: "10. Februar",
    profile_event1_attendees: "120 Teilnehmer",
    profile_event1_description: "Jazz-Abend mit internationalen Künstlern in einzigartiger Atmosphäre.",
    profile_event2_title: "Astronomie-Konferenz 2024",
    profile_event2_date: "15. März",
    profile_event2_attendees: "45 Teilnehmer",
    profile_event2_description: "Ihre Veranstaltung über Astronomie und Weltraumforschung.",
    attending_badge: "✓ Teilnehmen",
    created_by_you_badge: "★ Von Ihnen erstellt",
    // Connections
    friends_since: "Freunde seit",
    connection1_date: "Mai 2024",
    connection2_date: "Januar 2025",
    // Chats
    chat1_name: "María González",
    chat1_preview: "Danke fürs Kommen zur Veranstaltung! 🔬",
    chat1_time: "10:30",
    chat2_name: "Gruppe: Fußball Barcelona ⚽",
    chat2_preview: "Carlos: Wir sehen uns Sonntag um 10",
    chat2_time: "Gestern",
    chat3_name: "Laura Pérez",
    chat3_preview: "Ich schicke dir den Link der Band 🎵",
    chat3_time: "Gestern",
    chat4_name: "Gruppe: KI-Workshop 💻",
    chat4_preview: "Ana hat ein Dokument geteilt",
    chat4_time: "2T",
    chat5_name: "Javier Moreno",
    chat5_preview: "Hey, hast du den Projektcode?",
    chat5_time: "3T",
    chat6_name: "Gruppe: Buchclub 📚",
    chat6_preview: "Pedro: Was haltet ihr vom Ende?",
    chat6_time: "4T",
    chat7_name: "Sofía Ramírez",
    chat7_preview: "Perfekt, wir sehen uns dort 👍",
    chat7_time: "5T",
    chat8_name: "Gruppe: Klassisches Kino 🎬",
    chat8_preview: "Luis hat ein Foto gesendet",
    chat8_time: "1Wo",
    chat9_name: "Miguel Torres",
    chat9_preview: "Vielen Dank für die Empfehlung!",
    chat9_time: "1Wo",
    chat10_name: "Elena Díaz",
    chat10_preview: "Wir verbinden uns bald 😊",
    chat10_time: "2Wo",
  },
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Load saved preferences
  const savedTheme = localStorage.getItem("theme") || "light"
  const savedLanguage = localStorage.getItem("language") || "es"

  setTheme(savedTheme)
  setLanguage(savedLanguage)

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn")
  const mobileMenu = document.getElementById("mobile-menu")

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      mobileMenu.classList.toggle("active")
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.remove("active")
      }
    })

    // Close mobile menu when clicking a link
    const mobileNavLinks = mobileMenu.querySelectorAll("a")
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active")
      })
    })
  }

  // Accessibility panel toggle
  const accessibilityBtn = document.getElementById("accessibility-btn")
  const accessibilityPanel = document.getElementById("accessibility-panel")

  if (accessibilityBtn && accessibilityPanel) {
    accessibilityBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      accessibilityPanel.classList.toggle("active")
    })

    // Close panel when clicking outside
    document.addEventListener("click", (e) => {
      if (!accessibilityPanel.contains(e.target) && !accessibilityBtn.contains(e.target)) {
        accessibilityPanel.classList.remove("active")
      }
    })
  }

  // Theme buttons
  const themeLightBtn = document.getElementById("theme-light")
  const themeDarkBtn = document.getElementById("theme-dark")

  if (themeLightBtn) {
    themeLightBtn.addEventListener("click", () => {
      setTheme("light")
      localStorage.setItem("theme", "light")
    })
  }

  if (themeDarkBtn) {
    themeDarkBtn.addEventListener("click", () => {
      setTheme("dark")
      localStorage.setItem("theme", "dark")
    })
  }

  // Language selector
  const languageSelect = document.getElementById("language-select")
  if (languageSelect) {
    languageSelect.value = savedLanguage
    languageSelect.addEventListener("change", function () {
      const lang = this.value
      setLanguage(lang)
      localStorage.setItem("language", lang)
    })
  }

  // Profile tabs
  const tabs = document.querySelectorAll(".tab")
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const tabName = this.getAttribute("data-tab")

      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"))
      this.classList.add("active")

      // Hide all tab contents
      document.querySelectorAll(".tab-content").forEach((content) => {
        content.style.display = "none"
      })

      // Show selected tab content
      const tabContent = document.getElementById("tab-" + tabName)
      if (tabContent) {
        tabContent.style.display = "block"
      }
    })
  })

  // --- FILTRADO DE EVENTOS CON SELECCIÓN MÚLTIPLE ---
  const filterButtons = document.querySelectorAll(".filter-btn")
  const eventCards = document.querySelectorAll(".event-card")

  if (filterButtons.length > 0 && eventCards.length > 0) {
    // Array para mantener las categorías seleccionadas
    let selectedCategories = []

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.getAttribute("data-category")

        // Si se hace clic en "Todos"
        if (category === "all") {
          // Desactivar todas las categorías seleccionadas
          selectedCategories = []
          
          // Resetear estilos: "Todos" activo, resto secundario
          filterButtons.forEach((btn) => {
            btn.classList.remove("btn-primary")
            btn.classList.add("btn-secondary")
          })
          button.classList.remove("btn-secondary")
          button.classList.add("btn-primary")
        } else {
          // Si se selecciona una categoría específica, desactivar "Todos"
          const allButton = document.querySelector('.filter-btn[data-category="all"]')
          if (allButton) {
            allButton.classList.remove("btn-primary")
            allButton.classList.add("btn-secondary")
          }

          // Toggle de la categoría seleccionada
          const index = selectedCategories.indexOf(category)
          if (index > -1) {
            // Si ya está seleccionada, la quitamos
            selectedCategories.splice(index, 1)
            button.classList.remove("btn-primary")
            button.classList.add("btn-secondary")
          } else {
            // Si no está seleccionada, la agregamos
            selectedCategories.push(category)
            button.classList.remove("btn-secondary")
            button.classList.add("btn-primary")
          }

          // Si no hay categorías seleccionadas, activar "Todos"
          if (selectedCategories.length === 0 && allButton) {
            allButton.classList.remove("btn-secondary")
            allButton.classList.add("btn-primary")
          }
        }

        // Filtrar las tarjetas según las categorías seleccionadas
        eventCards.forEach((card) => {
          const cardCategory = card.getAttribute("data-category")
          
          // Mostrar si: no hay categorías seleccionadas O la categoría de la tarjeta está en el array
          if (selectedCategories.length === 0 || selectedCategories.includes(cardCategory)) {
            card.style.display = ""
            card.style.opacity = "1"
          } else {
            card.style.display = "none"
            card.style.opacity = "0"
          }
        })
      })
    })
  }

  // --- FILTRADO DE EVENTOS DE PERFIL ---
  const profileEventFilters = document.querySelectorAll(".profile-event-filter")
  const profileEventItems = document.querySelectorAll(".profile-event-item")

  if (profileEventFilters.length > 0 && profileEventItems.length > 0) {
    // Ordenar eventos por fecha al cargar
    const eventsContainer = profileEventItems[0]?.parentElement
    if (eventsContainer) {
      const sortedEvents = Array.from(profileEventItems).sort((a, b) => {
        const dateA = new Date(a.getAttribute("data-event-date"))
        const dateB = new Date(b.getAttribute("data-event-date"))
        return dateA - dateB
      })
      sortedEvents.forEach(event => eventsContainer.appendChild(event))
    }

    profileEventFilters.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter")

        // Actualizar estilos de botones
        profileEventFilters.forEach((btn) => {
          btn.classList.remove("active")
          btn.classList.remove("btn-primary")
          btn.classList.add("btn-secondary")
        })
        button.classList.add("active")
        button.classList.remove("btn-secondary")
        button.classList.add("btn-primary")

        // Filtrar eventos
        profileEventItems.forEach((item) => {
          const eventType = item.getAttribute("data-event-type")
          
          if (filter === "all") {
            item.style.display = ""
            item.style.opacity = "1"
          } else if (filter === eventType) {
            item.style.display = ""
            item.style.opacity = "1"
          } else {
            item.style.display = "none"
            item.style.opacity = "0"
          }
        })
      })
    })
  }
})

function setTheme(theme) {
  document.body.setAttribute("data-theme", theme)

  const themeLightBtn = document.getElementById("theme-light")
  const themeDarkBtn = document.getElementById("theme-dark")

  if (themeLightBtn && themeDarkBtn) {
    themeLightBtn.classList.remove("active")
    themeDarkBtn.classList.remove("active")

    if (theme === "light") {
      themeLightBtn.classList.add("active")
    } else {
      themeDarkBtn.classList.add("active")
    }
  }
}

function setLanguage(lang) {
  document.documentElement.lang = lang

  // Update all elements with data-translate attribute
  const elements = document.querySelectorAll("[data-translate]")
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate")
    if (translations[lang] && translations[lang][key]) {
      // For textarea, update the value/content
      if (element.tagName === "TEXTAREA") {
        element.value = translations[lang][key]
      } else {
        element.textContent = translations[lang][key]
      }
    }
  })

  // Update all elements with data-placeholder attribute
  const placeholderElements = document.querySelectorAll("[data-placeholder]")
  placeholderElements.forEach((element) => {
    const key = element.getAttribute("data-placeholder")
    if (translations[lang] && translations[lang][key]) {
      element.placeholder = translations[lang][key]
    }
  })
}