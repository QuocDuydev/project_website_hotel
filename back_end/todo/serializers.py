from rest_framework import serializers
from .models import User, Rooms, Hotels, Booking
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'name', 'email', 'password', 'account_type' ,'joined')

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotels
        fields =  ("id", "hotelname", "hotelimage", "descriptions",  "totalroom", "roommap", "location", "rating", "dateadded")

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rooms
        fields =  ("id", "hotel","roomname", "roomimage", "descriptions", "roomprice", "roomnumber", "roomoccupancy", "dateadded")

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields =  ("id", "hotel","room", "name", "email", "phonenumber", "checkin", "checkout", "total", "status")

