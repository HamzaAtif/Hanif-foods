import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-orange-900 mb-12">Contact Us</h1>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <Phone className="h-10 w-10 text-orange-600 mb-2" />
              <CardTitle>Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">+92 324 252 4303</p>
              <p className="text-gray-600 mt-2">Call for orders or inquiries</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MapPin className="h-10 w-10 text-orange-600 mb-2" />
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">Hanif Foods & Caterers</p>
              <p className="text-gray-600 mt-2">Karachi, Pakistan</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="h-10 w-10 text-orange-600 mb-2" />
              <CardTitle>Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">Daily: 11:00 AM - 11:00 PM</p>
              <p className="text-gray-600 mt-2">Open 7 days a week</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}