
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
        def create(self, clean_data):
            user_obj = Users.objects.create_user(username=clean_data['username'], password=clean_data['password'])
            user_obj.save()
            return user_obj 

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
        user_id = serializers.PrimaryKeyRelatedField(read_only=True)
        

