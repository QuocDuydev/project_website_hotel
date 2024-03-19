from django.shortcuts import render
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import check_password
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate
from .serializers import UserLoginSerializer,UserSerializer, RoomSerializer, HotelSerializer, BookingSerializer
from .models import Users, Rooms, Hotels, Booking

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = UserLoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        username = serializer.validated_data['username']
        password = serializer.validated_data['password']
        
        try:
            user = Users.objects.get(username=username)
        except Users.DoesNotExist:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        
        # Check if the provided password matches the hashed password in the database
        if check_password(password, user.password):
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = Users.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        # Băm mật khẩu trước khi lưu vào cơ sở dữ liệu
        password = make_password(serializer.validated_data['password'])
        serializer.validated_data['password'] = password
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
    
class UserRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Users.objects.all()
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
    # permission_classes = [IsAuthenticated]

    # def create(self, request):
    #     # Trích xuất dữ liệu từ yêu cầu
    #     hotel_id = request.data.get('hotel_id')
    #     room_id = request.data.get('room_id')
    #     name = request.data.get('name')
    #     email = request.data.get('email')
    #     phonenumber = request.data.get('phonenumber')
    #     address = request.data.get('address')
    #     checkin = request.data.get('checkin')
    #     checkout = request.data.get('checkout')
    #     total = request.data.get('total')
    #     status = request.data.get('status')

    #     # Tạo một bản ghi Booking mới
    #     booking = Booking.objects.create(
    #         hotel_id=hotel_id,
    #         room_id=room_id,
    #         name=name,
    #         email=email,
    #         phonenumber=phonenumber,
    #         address=address,
    #         checkin=checkin,
    #         checkout=checkout,
    #         total=total,
    #         status=status
    #     )

    #     # Serialize dữ liệu và trả về
    #     serializer = BookingSerializer(booking)
    #     return Response(serializer.data, status=status.HTTP_201_CREATED)

class HotelRoomsListView(APIView):
    def get(self, request, hotel_id, format=None):
        rooms = Rooms.objects.filter(hotel_id=hotel_id)
        serializer = RoomSerializer(rooms, many=True, context={'request': request})
        return Response(serializer.data)
    
class RoomstoHotelListView(APIView):
    def get(self, request, hotel_id,room_id, format=None):
        rooms = Rooms.objects.filter(hotel_id=hotel_id, room_id=room_id)
        serializer = RoomSerializer(rooms, many=True, context={'request': request})
        return Response(serializer.data)
