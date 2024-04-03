from django.contrib import admin
from .models import Users, Rooms ,Hotels, Booking

class UserAdmin(admin.ModelAdmin):
    list_display = ("id", "username", "name", "email", "password", "account_type", "joined")

class HotelAdmin(admin.ModelAdmin):
    list_display = ("hotel_id", "hotelname", "hotelimage", "descriptions",  "totalroom", "roommap", "location", "rating", "dateadded")

class RoomAdmin(admin.ModelAdmin):
    list_display = ("room_id", "hotel", "roomname", "roomimage", "descriptions", "roomprice", "roomnumber", "roomoccupancy", "room_type", "dateadded",)

class BookingAdmin(admin.ModelAdmin):
    list_display = ("booking_id","user","hotel","room", "name", "email", "phonenumber","address", "checkin", "checkout", "total", "datebooking", "status")
    
admin.site.register(Users, UserAdmin)
admin.site.register(Hotels, HotelAdmin)
admin.site.register(Rooms, RoomAdmin)
admin.site.register(Booking, BookingAdmin)