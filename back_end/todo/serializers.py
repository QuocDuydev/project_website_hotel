
from django.conf import Settings
from rest_framework import serializers
from .models import Users, Rooms, Hotels, Booking, Recomments
from django.contrib.auth import get_user_model
UserModel = get_user_model()
class UserSignupSerializers(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'
    def create(self, clean_data):
        user_obj = UserModel.objects.create_user(email=clean_data['email'],username=clean_data['username'], password=clean_data['password'])
        user_obj.email = clean_data['email']
        user_obj.save()
        return user_obj 

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
        user_id = serializers.PrimaryKeyRelatedField(read_only=True)

class RecommentSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Recomments
        fields = '__all__'
        user_id = serializers.PrimaryKeyRelatedField(read_only=True)
        

