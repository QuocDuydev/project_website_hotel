from rest_framework import serializers
from .models import User
from .models import Rooms
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'name', 'email', 'password', 'joined')

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rooms
        fields =  ("id", "roomname", "roomimage", "descriptions", "roomprice", "roomnumber", "roomoccupancy", "dateadded")