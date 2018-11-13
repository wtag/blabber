Gem::Specification.new do |s|
    s.name        = 'blabber'
    s.version     = '0.0.0'
    s.date        = '2018-11-13'
    s.summary     = "GRPC service library for chatting system"
    s.authors     = ["Junan Chakma"]
    s.email       = 'junan.chakma@welldev.io'
    s.files       = `git ls-files -z ruby`.split("\x0")
    s.require_paths = ['ruby']

    s.license       = 'MIT'


    s.add_dependency 'grpc'
  end
  