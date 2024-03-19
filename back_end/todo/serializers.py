
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
        fields =  '__all__'

class RoomSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Rooms
        fields = '__all__'

    
class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'

