# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'blabber/version'

Gem::Specification.new do |s|
    s.name        = 'blabber'
    s.version     = Blabber::VERSION
    s.date        = '2018-11-13'
    s.summary     = 'Protobuf SDK for gRPC communication'
    s.authors     = ['Junan Chakma']
    s.email       = 'junan.chakma@welldev.io'
    s.files       = `git ls-files -z ruby lib`.split("\x0")
    s.require_paths = ['lib', 'ruby']

    s.license       = 'MIT'

    s.add_dependency 'grpc'
  end
