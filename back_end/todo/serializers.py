from rest_framework import serializers
from .models import User, Rooms, Hotels
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'name', 'email', 'password', 'account_type' ,'joined')

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rooms
        fields =  ("id", "roomname", "roomimage", "descriptions", "roomprice", "roomnumber", "roomoccupancy", "dateadded")

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotels
        fields =  ("id", "hotelname", "hotelimage", "descriptions",  "totalroom", "roommap", "location", "rating", "dateadded")
