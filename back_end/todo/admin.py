from django.contrib import admin
from .models import User, Rooms ,Hotels, Booking

class UserAdmin(admin.ModelAdmin):
    list_display = ("id", "username", "name", "email", "password", "account_type", "joined")
class RoomAdmin(admin.ModelAdmin):
    list_display = ("id", "hotel", "roomname", "roomimage", "descriptions", "roomprice", "roomnumber", "roomoccupancy", "dateadded")
class HotelAdmin(admin.ModelAdmin):
    list_display = ("id", "hotelname", "hotelimage", "descriptions",  "totalroom", "roommap", "location", "rating", "dateadded")
class BookingAdmin(admin.ModelAdmin):
    list_display = ("id", "hotel","room", "name", "email", "phonenumber", "checkin", "checkout", "total", "status")
admin.site.register(User, UserAdmin)
admin.site.register(Hotels, HotelAdmin)
admin.site.register(Rooms, RoomAdmin)
admin.site.register(Booking, BookingAdmin)