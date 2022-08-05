QT      +=  webenginewidgets

HEADERS =   mainwindow.h 
SOURCES +=   main.cpp \
            mainwindow.cpp 
RESOURCES = jquery.qrc

# Disable Qt Quick compiler because the example does not use QML, but more importantly so that
# the source code of the .js files is not removed from the embedded qrc file.
CONFIG -= qtquickcompiler
CONFIG+=c++14





