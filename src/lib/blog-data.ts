import artImg from "@/assets/blog-art.jpg";
import sportsImg from "@/assets/blog-sports.jpg";
import tripImg from "@/assets/blog-trip.jpg";
import storyImg from "@/assets/blog-story.jpg";
import stemImg from "@/assets/blog-stem.jpg";
import musicImg from "@/assets/blog-music.jpg";

export type BlogCategory =
  | "School Events"
  | "Classroom Activities"
  | "Sports Day"
  | "Educational Trips"
  | "Announcements"
  | "Parent Updates";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  author: string;
  image: string;
  content: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "rainbow-art-week",
    title: "Rainbow Art Week Lights Up Our Classrooms",
    excerpt:
      "Our nursery and reception classes spent a wonderful week exploring colour, texture and self-expression through paint, paper and play.",
    category: "Classroom Activities",
    date: "May 12, 2025",
    author: "Ms. Amara",
    image: artImg,
    content: [
      "What started as a simple art lesson turned into a whole week of joyful discovery. Children dipped fingers in paint, stamped with sponges and built collages with scraps from home.",
      "We focused on the process, not the product — every smile, splash and 'look what I made!' was a win. Parents will receive a small portfolio of work at the next pickup.",
      "Big thanks to the families who donated fabric, buttons and recycled cardboard. Daring Kids is a community, and Rainbow Week proved it.",
    ],
  },
  {
    slug: "sports-day-2025",
    title: "Sports Day 2025: Run, Laugh, Cheer!",
    excerpt:
      "Sunshine, balloons and a whole lot of giggles. Here are the highlights from our annual Sports Day.",
    category: "Sports Day",
    date: "April 28, 2025",
    author: "Mr. Kofi",
    image: sportsImg,
    content: [
      "From the egg-and-spoon race to the parent-and-child relay, this year's Sports Day was our biggest yet — over 120 families joined us on the field.",
      "Every child took home a participation medal, but the real prize was watching our youngest learners cheer on their friends with such heart.",
      "Photos and the full event recap are now available in the parent portal.",
    ],
  },
  {
    slug: "farm-trip-adventure",
    title: "Down on the Farm: Our Reception Trip",
    excerpt:
      "Goats, ponies and freshly-baked bread — our reception class had a hands-on day learning where food comes from.",
    category: "Educational Trips",
    date: "April 9, 2025",
    author: "Ms. Priya",
    image: tripImg,
    content: [
      "The Bluebell Farm trip was an unforgettable day of discovery. Children fed lambs, collected eggs and even helped knead dough for the farm kitchen.",
      "Back in class, we built a 'farm corner' with everything they learned. Ask your child about the difference between a cow and a calf!",
    ],
  },
  {
    slug: "new-storytime-corner",
    title: "Introducing Our New Storytime Corner",
    excerpt:
      "A cosy reading nook with soft cushions, fairy lights and over 200 new picture books — built just for our little readers.",
    category: "Announcements",
    date: "March 22, 2025",
    author: "Head Teacher",
    image: storyImg,
    content: [
      "We're thrilled to unveil the Daring Kids Storytime Corner, a dedicated reading space for nursery through Grade 1.",
      "Funded by our spring fundraiser, the corner features a curated library of inclusive, age-appropriate picture books.",
    ],
  },
  {
    slug: "tiny-engineers",
    title: "Tiny Engineers at Work",
    excerpt:
      "Our Grade 1 class is exploring early STEM through gears, levers and lots of curious questions.",
    category: "Classroom Activities",
    date: "March 4, 2025",
    author: "Mr. Ethan",
    image: stemImg,
    content: [
      "Hands-on building is one of the best ways young minds learn cause and effect. This term, our Grade 1 class is investigating how things move.",
      "Expect lots of 'why?' questions at the dinner table — and please indulge them. Curiosity is the foundation of every great learner.",
    ],
  },
  {
    slug: "music-mornings",
    title: "Music Mornings Are Back",
    excerpt:
      "Every Friday, our hall fills with little voices and tiny ukuleles. Here's why music is core to our curriculum.",
    category: "Parent Updates",
    date: "February 18, 2025",
    author: "Ms. Lola",
    image: musicImg,
    content: [
      "Music supports language, memory and emotional development. That's why Music Mornings are a permanent part of our weekly rhythm.",
      "All families are welcome to join the last Friday of each month for our open sing-along.",
    ],
  },
];

export const categories: BlogCategory[] = [
  "School Events",
  "Classroom Activities",
  "Sports Day",
  "Educational Trips",
  "Announcements",
  "Parent Updates",
];