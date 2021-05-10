FROM ruby:3-slim

WORKDIR /app

RUN gem install grpc-tools
