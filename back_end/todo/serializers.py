
from django.conf import Settings
from rest_framework import serializers
from .models import Users, Rooms, Hotels, Booking

class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'

class HotelSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Hotels
        fields =  ("id", "hotelname", "hotelimage", "descriptions",  "totalroom", "roommap", "location", "rating", "dateadded")

class RoomSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Rooms
        fields = ("roomid", "hotel", "roomname", "roomimage", "descriptions", "roomprice", "roomnumber", "roomoccupancy", "dateadded")

    
class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields =  ("id", "hotel","room", "name", "email", "phonenumber", "checkin", "checkout", "total", "status")

