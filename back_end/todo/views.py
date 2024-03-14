from django.shortcuts import render
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from .serializers import UserSerializer, RoomSerializer, HotelSerializer, BookingSerializer
from .models import User, Rooms, Hotels, Booking

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    
class UserRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class RoomView(viewsets.ModelViewSet):
    serializer_class = RoomSerializer
    queryset = Rooms.objects.all()

class RoomRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
   queryset = Rooms.objects.all()
   serializer_class = RoomSerializer

class HotelView(viewsets.ModelViewSet):
    serializer_class = HotelSerializer
    queryset = Hotels.objects.all()

class HotelRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Hotels.objects.all()
    serializer_class = HotelSerializer

class BookingView(viewsets.ModelViewSet):
    serializer_class = BookingSerializer
    queryset = Booking.objects.all()

class BookingRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

class HotelRoomsListView(APIView):
    def get(self, request, hotel_id, format=None):
        rooms = Rooms.objects.filter(hotel_id=hotel_id)
        serializer = RoomSerializer(rooms, many=True, context={'request': request})
        return Response(serializer.data)
    
class RoomstoHotelListView(APIView):
    def get(self, request, hotel_id,roomid, format=None):
        rooms = Rooms.objects.filter(hotel_id=hotel_id, roomid=roomid)
        serializer = RoomSerializer(rooms, many=True, context={'request': request})
        return Response(serializer.data)
