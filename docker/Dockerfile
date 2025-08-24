FROM php:8.3.0-fpm-alpine

# Update System
RUN apk update && apk upgrade

# Install system dependencies and build tools
RUN apk add --no-cache \
    icu-dev \
    libjpeg-turbo-dev \
    libpng-dev \
    freetype-dev \
    libzip-dev \
    zip \
    unzip \
    autoconf \
    $PHPIZE_DEPS

# Configure and install PHP extensions (without redis)
RUN docker-php-ext-configure gd \
    --with-freetype \
    --with-jpeg \
    && docker-php-ext-install \
    gd \
    intl \
    zip \
    pcntl \
    exif \
    bcmath \
    pdo_mysql

# Install Redis extension via PECL
RUN pecl install redis \
    && docker-php-ext-enable redis

# Install and enable OPcache
RUN docker-php-ext-install opcache \
    && docker-php-ext-enable opcache

# Configure OPcache
RUN { \
    echo "opcache.enable=1"; \
    echo "opcache.memory_consumption=256"; \
    echo "opcache.interned_strings_buffer=16"; \
    echo "opcache.max_accelerated_files=20000"; \
    echo "opcache.validate_timestamps=0"; \
    echo "opcache.revalidate_freq=0"; \
    echo "opcache.fast_shutdown=1"; \
    } > /usr/local/etc/php/conf.d/opcache.ini


# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Increase PHP upload limits
RUN { \
    echo "upload_max_filesize=50M"; \
    echo "post_max_size=50M"; \
    } > /usr/local/etc/php/conf.d/uploads.ini

# Set working directory
WORKDIR /var/www/html

# Exposing fastcgi port
EXPOSE 9000
