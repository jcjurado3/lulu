import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Sparkles, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion for Wine Culture",
      description: "We believe wine brings people together and creates memorable moments worth celebrating."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Thoughtful Design",
      description: "Every piece is carefully crafted to blend functionality with elegant aesthetics."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community First",
      description: "We're building a community of wine lovers who appreciate style and quality."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Commitment",
      description: "We use only premium materials and maintain the highest standards in craftsmanship."
    }
  ];

  const milestones = [
    {
      year: "2022",
      title: "The Idea",
      description: "Founded with a vision to create stylish wine accessories for modern enthusiasts."
    },
    {
      year: "2023",
      title: "First Collection",
      description: "Launched our signature line of wine carriers, starting with The Elegance Tote."
    },
    {
      year: "2024",
      title: "Growing Community",
      description: "Reached 1,000+ happy customers and expanded our product line."
    },
    {
      year: "2025",
      title: "What's Next",
      description: "Expanding internationally and introducing new sustainable materials."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-gopher text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Why I Created Lulu Vine
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Every great wine moment deserves to be elevated. That's the belief that sparked Lulu Vine—a brand dedicated to creating beautiful, functional accessories for wine lovers who appreciate both style and substance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Founder"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-gopher text-3xl font-semibold text-neutral-900">
                Meet the Founder
              </h2>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Hi, I'm Sarah, and I've always believed that the best conversations happen over a glass of wine. Whether it's a casual Friday night with friends or a special celebration, wine has this magical way of bringing people together.
                </p>
                <p>
                  But I noticed something missing in the market—wine accessories that were as thoughtful and stylish as the wines we love. Too often, I'd find myself carrying bottles in plain paper bags or basic carriers that didn't reflect the care I put into selecting the perfect wine.
                </p>
                <p>
                  That's when Lulu Vine was born. I wanted to create accessories that honor both the wine and the moment—pieces that are beautiful enough for gifting, functional enough for everyday use, and stylish enough to spark conversations.
                </p>
                <p>
                  Every Lulu Vine piece is designed with real wine lovers in mind, because I believe every sip should be an experience worth savoring.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-gopher text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our values guide everything we do, from design to customer service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 text-secondary-600 rounded-full mb-6">
                  {value.icon}
                </div>
                <h3 className="font-gopher text-xl font-semibold text-neutral-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-gopher text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              Made for Life's Wine Moments
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              From intimate dinners to grand celebrations, our carriers are designed for every occasion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Dinner Parties",
                description: "Arrive in style with the perfect hostess gift",
                image: "https://images.pexels.com/photos/1284171/pexels-photo-1284171.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                title: "Weekend Getaways",
                description: "Travel with your favorite bottles securely",
                image: "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                title: "Special Celebrations",
                description: "Make every toast memorable",
                image: "https://images.pexels.com/photos/1649565/pexels-photo-1649565.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="font-gopher text-xl font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-sm opacity-90">{useCase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-gopher text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-neutral-600">
              From idea to community—here's how Lulu Vine came to life.
            </p>
          </motion.div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center space-x-8 ${index % 2 === 1 ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className={`bg-white p-6 rounded-2xl shadow-lg ${index % 2 === 1 ? 'text-right' : ''}`}>
                    <div className="text-2xl font-bold text-secondary-500 mb-2">{milestone.year}</div>
                    <h3 className="font-gopher text-xl font-semibold text-neutral-900 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-neutral-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-secondary-500 rounded-full flex-shrink-0" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-gopher text-3xl md:text-4xl font-semibold text-neutral-900 mb-6">
              Join the Lulu Vine Community
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Ready to elevate your wine moments? Discover our collection and become part of a community that celebrates style, quality, and the joy of wine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/shop"
                className="bg-secondary-500 text-white px-8 py-4 rounded-full font-medium hover:bg-secondary-600 transition-colors flex items-center justify-center group"
              >
                Shop the Collection
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/journal"
                className="border-2 border-secondary-500 text-secondary-500 px-8 py-4 rounded-full font-medium hover:bg-secondary-500 hover:text-white transition-colors"
              >
                Read Our Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;