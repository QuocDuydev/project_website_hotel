from django.shortcuts import render
from .validation import custom_validation
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import check_password
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate
from rest_framework import generics
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView
from .serializers import UserSerializer, RoomSerializer, HotelSerializer, BookingSerializer, UserSignupSerializers
from .models import Users, Rooms, Hotels, Booking

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        return token

class MyTokenObtainView(TokenObtainPairView):
     serializer_class = MyTokenObtainPairSerializer

class UserSignup(APIView):
    permission_classes = (permissions.AllowAny,)
    def post(self, request):
        clean_data = custom_validation(request.data)
        serializer = UserSignupSerializers(data=clean_data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.create(clean_data)
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = Users.objects.all()
    permission_classes = [IsAuthenticated]

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
    permission_classes = [permissions.AllowAny]
    serializer_class = RoomSerializer
    queryset = Rooms.objects.all()

class RoomRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
   permission_classes = [permissions.AllowAny]
   queryset = Rooms.objects.all()
   serializer_class = RoomSerializer

class HotelView(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = HotelSerializer
    queryset = Hotels.objects.all()

class HotelRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = Hotels.objects.all()
    serializer_class = HotelSerializer

class BookingView(viewsets.ModelViewSet):
    serializer_class = BookingSerializer
    queryset = Booking.objects.all()

class ListBookingView(generics.ListCreateAPIView):
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user_id = self.request.user.id
        return Booking.objects.filter(user_id=user_id)

class BookingRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        # Lấy user_id từ tài khoản đang đăng nhập
        user = request.user
        serializer.save(user_id=user)  
        return Response(serializer.data, status=status.HTTP_201_CREATED)
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
    permission_classes = [permissions.AllowAny]
    def get(self, request, hotel_id, format=None):
        rooms = Rooms.objects.filter(hotel_id=hotel_id)
        serializer = RoomSerializer(rooms, many=True, context={'request': request})
        return Response(serializer.data)
    
class RoomstoHotelListView(APIView):
    permission_classes = [permissions.AllowAny]
    def get(self, request, hotel_id,room_id, format=None):
        rooms = Rooms.objects.filter(hotel_id=hotel_id, room_id=room_id)
        serializer = RoomSerializer(rooms, many=True, context={'request': request})
        return Response(serializer.data)
