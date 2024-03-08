from django.contrib import admin
from .models import User
from .models import Rooms
from .models import Hotels

class UserAdmin(admin.ModelAdmin):
    list_display = ("id", "username", "name", "email", "password", "account_type", "joined")
class RoomAdmin(admin.ModelAdmin):
    list_display = ("id", "roomname", "roomimage", "descriptions", "roomprice", "roomnumber", "roomoccupancy", "dateadded")
class HotelAdmin(admin.ModelAdmin):
    list_display = ("id", "hotelname", "hotelimage", "descriptions",  "totalroom", "roommap", "location", "rating", "dateadded")
admin.site.register(User, UserAdmin)
admin.site.register(Rooms, RoomAdmin)
admin.site.register(Hotels, HotelAdmin)