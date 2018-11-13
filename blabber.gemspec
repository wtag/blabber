# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(ruby) unless $LOAD_PATH.include?(lib)
require 'blabber/version'


Gem::Specification.new do |s|
    s.name        = 'blabber'
    s.version     = Blabber::Version
    s.date        = '2018-11-13'
    s.summary     = "GRPC service library for chatting system"
    s.authors     = ["Junan Chakma"]
    s.email       = 'junan.chakma@welldev.io'
    s.files       = `git ls-files -z ruby lib`.split("\x0")
    s.require_paths = ['lib']

    s.license       = 'MIT'


    s.add_dependency 'grpc'
  end
