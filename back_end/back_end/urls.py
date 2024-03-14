"""
URL configuration for back_end project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from todo import views

from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'users', views.UserView, 'user')
router.register(r'rooms', views.RoomView, 'room')
router.register(r'hotels', views.HotelView, 'hotel')
router.register(r'bookings', views.BookingView, 'booking')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/rooms/<int:id>/', views.RoomRetrieveUpdateDestroyView.as_view(), name='room-detail'),
    path('api/hotels/<int:id>/', views.HotelRetrieveUpdateDestroyView.as_view(), name='hotel-detail'),
    path('api/bookings/<int:id>/', views.BookingRetrieveUpdateDestroyView.as_view(), name='booking-detail'),
    path('api/hotels/<int:hotel_id>/rooms/', views.HotelRoomsListView.as_view(), name='hotel-rooms'),
    path('api/hotels/<int:hotel_id>/rooms/<int:roomid>', views.RoomstoHotelListView.as_view(), name='rooms-to-hotels'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

