import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChefHat, Clock, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-900 to-red-800 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Hanif Foods & Caterers</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
            Authentic Pakistani cuisine made with passion and tradition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700 text-white" asChild>
              <a href="/menu">View Menu</a>
            </Button>
            <Button size="lg" className="text-lg px-8 py-6" variant="outline" asChild>
              <a href="https://wa.me/923242524303">Order on WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <ChefHat className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Authentic Recipes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Traditional Pakistani recipes passed down through generations, made with premium ingredients
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Fast Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Quick and reliable delivery service to your doorstep, hot and fresh
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Quality Assured</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  High-quality ingredients and strict hygiene standards for every dish
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specials Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-orange-900 mb-16">Our Special Dishes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 bg-orange-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
                  <p className="mt-2 font-semibold">Chicken Biryani</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600">Fragrant basmati rice layered with tender chicken and aromatic spices</p>
                <p className="text-xl font-bold text-orange-700 mt-2">Rs. 450</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-orange-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
                  <p className="mt-2 font-semibold">Mutton Karahi</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600">Tender mutton cooked in traditional karahi with tomatoes and spices</p>
                <p className="text-xl font-bold text-orange-700 mt-2">Rs. 1200</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-orange-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
                  <p className="mt-2 font-semibold">Nihari</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600">Slow-cooked beef stew with rich, flavorful gravy and spices</p>
                <p className="text-xl font-bold text-orange-700 mt-2">Rs. 550</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Experience the authentic flavors of Pakistani cuisine with our delicious dishes
          </p>
          <Button size="lg" className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700" asChild>
            <a href="https://wa.me/923242524303">Order on WhatsApp Now</a>
          </Button>
        </div>
      </section>
    </div>
  );
}