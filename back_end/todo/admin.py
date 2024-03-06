from django.contrib import admin
from .models import User
from .models import Rooms

class UserAdmin(admin.ModelAdmin):
    list_display = ("id", "username", "name", "email", "password", "joined")
class RoomAdmin(admin.ModelAdmin):
    list_display = ("id", "roomname", "roomimage", "descriptions", "roomprice", "roomnumber", "roomoccupancy", "dateadded")

admin.site.register(User, UserAdmin)
admin.site.register(Rooms, RoomAdmin)