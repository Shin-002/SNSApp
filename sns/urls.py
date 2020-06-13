from django.contrib import admin
from django.urls import path, include
from rest_framework.authentoken import views
from django.config import settings
from django.config.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('authen/', views.obtain_auth_token),
    path('api/user/', include('api_user_urls')),
    path('api/dm/', include('api_dm_urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)