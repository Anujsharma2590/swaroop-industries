"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Testimonial } from "@/config/testimonials.config";
import { Star } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./TestimonialsSection.module.scss";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className={styles.testimonials}>
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>What Our Customers Say</h2>
          <p className={styles.description}>
            Trusted by customers worldwide for quality and reliability
          </p>
        </motion.div>
        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className={styles.swiper}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={styles.testimonialCard}
                >
                  <div className={styles.stars}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className={styles.star} fill="currentColor" />
                    ))}
                  </div>
                  <p className={styles.comment}>{testimonial.comment}</p>
                  <div className={styles.author}>
                    <div className={styles.authorInfo}>
                      <h4 className={styles.authorName}>{testimonial.name}</h4>
                      <p className={styles.authorLocation}>{testimonial.location}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}