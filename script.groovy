def buildBack() {
    dir(java_dir){
        withMaven(maven: mvn){
            sh "mvn clean install"
        }
    }
}
def buildFront() {
    
}
def testBack() {
    dir(java_dir){
        withMaven(maven: mvn){
            sh "mvn clean test"
        }
    }
}
def deployApp() {
    sh "docker-compose build"
    sh "docker-compose up -d"
}

return this