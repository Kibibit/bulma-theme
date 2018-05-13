# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "kibibit-bulma"
  spec.version       = "0.1.0"
  spec.authors       = ["Neil Kalman"]
  spec.email         = ["Neilkalman@gmail.com"]

  spec.summary       = "A simple markdown theme based on bulma.io"
  spec.homepage      = "http://kibibit.io"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
