from django.shortcuts import render
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from .serializers import UserSerializer
from .models import User
from .serializers import RoomSerializer
from .models import Rooms
from .serializers import HotelSerializer
from .models import Hotels
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



# @api_view(['GET', 'POST'])
# @permission_classes([IsAuthenticated])
# def testEndPoint(request):
#     if request.method == 'GET':
#         data = f"Congratulation {request.user}, your API just responded to GET request"
#         return Response({'response': data}, status=status.HTTP_200_OK)
#     elif request.method == 'POST':
#         text = "Hello buddy"
#         data = f'Congratulation your API just responded to POST request with text: {text}'
#         return Response({'response': data}, status=status.HTTP_200_OK)
#     return Response({}, status.HTTP_400_BAD_REQUEST)