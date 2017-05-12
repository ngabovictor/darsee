from django.conf.urls import url, include
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [

    url(r'^$', views.blog, name='index'),
    url(r'^article/(?P<article_id>\d+)', views.post, name= 'article'),
    url(r'^article/comment', views.comment, name='comment'),
    url(r'^article/like', views.like, name="like"),
]

if settings.DEBUG:
	urlpatterns+= static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
	urlpatterns+= static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
