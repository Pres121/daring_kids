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
    title: "Students teach other",
    excerpt:
      "Our nursery is full of creativty and joy whereby students teach each other during breaks.",
    category: "Classroom Activities",
    date: "May 12, 2025",
    author: "Mr Goliati",
    image: artImg,
    content: [
      "During breaks, students discuss homework, review class notes, solve problems together, or prepare for upcoming tests. Those who understand a topic well can assist classmates who may be struggling, creating a supportive and collaborative learning environment.",
    ],
  },
  {
    slug: "sports-day-2025",
    title: "Students Playing the ground",
    excerpt:
      "Sunshine, balloons and a whole lot of giggles. Here are the highlights from our annual Sports Day.",
    category: "Sports Day",
    date: "April 28, 2025",
    author: "Mr. Goliati",
    image: sportsImg,
    content: [
      "Sports Day is an exciting event that brings students together through friendly competition and teamwork. It provides an opportunity for learners to participate in various sporting activities, showcase their talents, and develop physical fitness.",
    ],
  },
  {
    slug: "farm-trip-adventure",
    title: "singing and dancing",
    excerpt:
    "hrough singing, dancing, and nursery rhymes, children develop confidence, creativity, coordination, and social skills while having fun and learning together" ,   
    category: "Educational Trips",
    date: "April 9, 2025",
    author: "Ms. Priya",
    image: tripImg,
    content: [
      "Children participate in nursery rhymes, action songs, traditional dances, and music activities that help them develop physically, socially, and emotionally. These joyful experiences create a positive learning environment where every child can shine and build confidence from an early age",
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