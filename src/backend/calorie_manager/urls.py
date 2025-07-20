from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/meals/', include('meals.urls')),  # ← これが必要
]
