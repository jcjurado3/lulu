import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const LifestyleSections: React.FC = () => {
  const lifestyleScenes = [
    {
      title: "Brunch & Bubbles",
      description: "Perfect for weekend brunches and celebrations with friends. Our carriers keep your bottles secure while adding a touch of elegance to any gathering.",
      image: "https://images.pexels.com/photos/1284171/pexels-photo-1284171.jpeg?auto=compress&cs=tinysrgb&w=800",
      cta: "Shop Totes",
      link: "/shop?category=totes"
    },
    {
      title: "Gift in Style",
      description: "Make every wine gift memorable. Our beautifully designed carriers transform a simple bottle into a thoughtful, reusable present that keeps giving.",
      image: "https://images.pexels.com/photos/1649565/pexels-photo-1649565.jpeg?auto=compress&cs=tinysrgb&w=800",
      cta: "Gift Ideas",
      link: "/shop?category=gifts"
    },
    {
      title: "Girls' Trip Ready",
      description: "Travel in style with our compact wine purses. Perfect for picnics, boat trips, or any adventure where you want to bring the party with you.",
      image: "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=800",
      cta: "Travel Collection",
      link: "/shop?category=travel"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-gopher text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
            Every Moment, Elevated
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            From intimate dinners to grand celebrations, our wine carriers are designed for life's special moments.
          </p>
        </motion.div>

        <div className="space-y-20">
          {lifestyleScenes.map((scene, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <h3 className="font-gopher text-2xl md:text-3xl font-semibold text-neutral-900 mb-4">
                  {scene.title}
                </h3>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  {scene.description}
                </p>
                <motion.a
                  href={scene.link}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center text-secondary-500 font-medium hover:text-secondary-600 transition-colors group"
                >
                  {scene.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-3xl shadow-2xl"
                >
                  <img
                    src={scene.image}
                    alt={scene.title}
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Floating Quote */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <span className="text-2xl">🍷</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleSections;