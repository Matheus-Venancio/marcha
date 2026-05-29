import { Users, Mic, Music, Flame, Clock, MapPin, Calendar, Star, Crown, Award, Heart } from "lucide-react";

export const siteConfig = {
  name: "Marcha Para Jesus Campinas",
  description: "O maior movimento gospel de Campinas. Adoração, fé e celebração nas ruas.",
  eventDate: "06 de Junho",
  location: "Praça Arautos da Paz - Taquaral / Campinas",
  contactEmail: "contato@marchaparajesuscampinas.com.br",
  contactPhone: "(19) 9 0000-0000",
  address: "Av. Brasil, 1000 — Centro, Campinas/SP"
};

export const statsData = [
  { n: "150K+", l: "Participantes" },
  { n: "20+", l: "Anos de história" },
  { n: "50+", l: "Artistas" },
  { n: "100%", l: "Gratuito" },
];

export const highlightsData = [
  { icon: Music, t: "Palco Principal", d: "Mais de 50 artistas e bandas em um line-up histórico." },
  { icon: Users, t: "Marcha pelas Ruas", d: "Caminhada de fé pelas principais avenidas de Campinas." },
  { icon: Flame, t: "Ministração", d: "Pregadores e líderes inspirando uma geração inteira." },
];

export const eventsData = [
  { date: "06 JUN", year: "2026", title: "Marcha Para Jesus Campinas", time: "10h às 22h", loc: "Praça Arautos da Paz", icon: Users, tag: "Evento principal" },
  { date: "13 JUN", year: "2026", title: "Vigília de Abertura", time: "20h às 00h", loc: "Igreja Sede", icon: Mic, tag: "Espiritual" },
  { date: "12 JUN", year: "2026", title: "Festival de Louvor", time: "19h", loc: "Centro de Convenções", icon: Music, tag: "Música" },
  { date: "07 JUN", year: "2026", title: "Treinamento de Voluntários", time: "14h", loc: "Auditório Sede", icon: Users, tag: "Voluntários" },
  { date: "30 MAI", year: "2026", title: "Coletiva de Imprensa", time: "10h", loc: "Online + Presencial", icon: Mic, tag: "Imprensa" },
];

export const lineupData = [
  { name: "Gabriela Rocha", time: "21:00", stage: "Palco Principal", day: "06 JUN", headliner: true, tag: "Atração Principal" },
  { name: "Maria Marçal", time: "20:00", stage: "Palco Principal", day: "06 JUN", headliner: true, tag: "Louvor" },
  { name: "Theo Rubia", time: "19:00", stage: "Palco Principal", day: "06 JUN", tag: "Adoração" },
  { name: "Jefferson & Suellen", time: "18:00", stage: "Palco Principal", day: "06 JUN", tag: "Dupla" },
  { name: "Sarah Farias", time: "17:00", stage: "Palco Principal", day: "06 JUN", tag: "Louvor" },
  { name: "Ao Cubo", time: "16:00", stage: "Palco Principal", day: "06 JUN", tag: "Hip-Hop / Rap" },
  { name: "Juliany Souza", time: "15:00", stage: "Palco Principal", day: "06 JUN", tag: "Adoração" },
  { name: "Felipe Rodrigues", time: "14:00", stage: "Palco Principal", day: "06 JUN", tag: "Adoração" },
  { name: "Marcados", time: "13:00", stage: "Palco Principal", day: "06 JUN", tag: "Louvor" },
  { name: "Nicoli Francini", time: "12:00", stage: "Palco Principal", day: "06 JUN", tag: "Louvor" },
  { name: "Stella Cardoso", time: "11:00", stage: "Palco Principal", day: "06 JUN", tag: "Louvor" },
];

export const scheduleData = [
  { time: "08:00", title: "Abertura dos portões", type: "Logística" },
  { time: "09:00", title: "Concentração e oração", type: "Espiritual" },
  { time: "10:00", title: "Início da Marcha", type: "Marcha" },
  { time: "13:00", title: "Chegada ao palco principal", type: "Marcha" },
  { time: "14:00", title: "Ministração de louvor — Banda Convidada", type: "Música" },
  { time: "16:00", title: "Pregação — Pastor convidado", type: "Palavra" },
  { time: "17:30", title: "Show — Artista Nacional", type: "Música" },
  { time: "19:30", title: "Show de encerramento", type: "Música" },
  { time: "21:30", title: "Oração final", type: "Espiritual" },
];

export const sponsorTiersData = [
  { icon: Crown, name: "Diamante", price: "Sob consulta", color: "from-amber-300 to-amber-500", perks: ["Logo no palco principal", "Menção em todas as comunicações", "Stand premium 6x6m", "Ativações exclusivas", "Pacote VIP com 20 ingressos"] },
  { icon: Award, name: "Ouro", price: "R$ 25.000", color: "from-yellow-400 to-orange-500", perks: ["Logo no telão", "Stand 4x4m", "Posts em redes sociais", "10 credenciais VIP"] },
  { icon: Star, name: "Prata", price: "R$ 12.000", color: "from-gray-300 to-gray-500", perks: ["Logo no site", "Stand 3x3m", "5 credenciais VIP"] },
  { icon: Heart, name: "Apoiador", price: "R$ 5.000", color: "from-orange-400 to-red-500", perks: ["Logo no site", "Menção em agradecimento"] },
];

export const sponsorsData = {
  Diamante: [
    { name: "RochaTec Sistemas", desc: "Soluções e tecnologia para grandes eventos.", icon: Crown },
    { name: "Editora Graça", desc: "Levando a palavra através da literatura.", icon: Star }
  ],
  Ouro: [
    { name: "VidaPlena Saúde", desc: "Cuidando do corpo e da mente com amor.", icon: Heart },
    { name: "Logos+ Educação", desc: "Ensino com base em princípios cristãos.", icon: Award },
    { name: "Aliança Construtora", desc: "Construindo o futuro da nossa cidade.", icon: Crown }
  ],
  Prata: [
    { name: "Eleva Marketing", desc: "Comunicando esperança e fé.", icon: Star },
    { name: "Casa do Pão", desc: "O verdadeiro sabor em cada detalhe.", icon: Heart },
    { name: "Salt&Light", desc: "Seja o sal e a luz do mundo.", icon: Flame }
  ]
};

export const fakeSponsorsList = [
  { name: "RochaTec", desc: "Tecnologia para eventos", icon: Crown },
  { name: "VidaPlena", desc: "Saúde e bem-estar", icon: Heart },
  { name: "Logos+", desc: "Educação transformadora", icon: Award },
  { name: "Aliança", desc: "Construindo sonhos", icon: Crown }
];
